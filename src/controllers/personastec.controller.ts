import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Personastec} from '../models';
import {PersonastecRepository} from '../repositories';

export class PersonastecController {
  constructor(
    @repository(PersonastecRepository)
    public personastecRepository: PersonastecRepository,
  ) { }

  @post('/personastec')
  @response(200, {
    description: 'Personastec model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personastec)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personastec, {
            title: 'NewPersonastec',
            exclude: ['id_persona'],
          }),
        },
      },
    })
    personastec: Omit<Personastec, 'id_persona'>,
  ): Promise<Personastec> {
    return this.personastecRepository.create(personastec);
  }

  @get('/personastec/count')
  @response(200, {
    description: 'Personastec model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personastec) where?: Where<Personastec>,
  ): Promise<Count> {
    return this.personastecRepository.count(where);
  }

  @get('/personastec')
  @response(200, {
    description: 'Array of Personastec model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personastec, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personastec) filter?: Filter<Personastec>,
  ): Promise<Personastec[]> {
    return this.personastecRepository.find(filter);
  }

  @patch('/personastec')
  @response(200, {
    description: 'Personastec PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personastec, {partial: true}),
        },
      },
    })
    personastec: Personastec,
    @param.where(Personastec) where?: Where<Personastec>,
  ): Promise<Count> {
    return this.personastecRepository.updateAll(personastec, where);
  }

  @get('/personastec/{id}')
  @response(200, {
    description: 'Personastec model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personastec, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personastec, {exclude: 'where'}) filter?: FilterExcludingWhere<Personastec>
  ): Promise<Personastec> {
    return this.personastecRepository.findById(id, filter);
  }

  @patch('/personastec/{id}')
  @response(204, {
    description: 'Personastec PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personastec, {partial: true}),
        },
      },
    })
    personastec: Personastec,
  ): Promise<void> {
    await this.personastecRepository.updateById(id, personastec);
  }

  @put('/personastec/{id}')
  @response(204, {
    description: 'Personastec PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personastec: Personastec,
  ): Promise<void> {
    await this.personastecRepository.replaceById(id, personastec);
  }

  @del('/personastec/{id}')
  @response(204, {
    description: 'Personastec DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personastecRepository.deleteById(id);
  }
}
