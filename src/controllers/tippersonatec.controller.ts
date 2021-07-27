import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Tippersonatec} from '../models';
import {TippersonatecRepository} from '../repositories';

export class TippersonatecController {
  constructor(
    @repository(TippersonatecRepository)
    public tippersonatecRepository : TippersonatecRepository,
  ) {}

  @post('/tippersonatec')
  @response(200, {
    description: 'Tippersonatec model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tippersonatec)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippersonatec, {
            title: 'NewTippersonatec',
            exclude: ['id_tipoPersona'],
          }),
        },
      },
    })
    tippersonatec: Omit<Tippersonatec, 'id_tipoPersona'>,
  ): Promise<Tippersonatec> {
    return this.tippersonatecRepository.create(tippersonatec);
  }

  @get('/tippersonatec/count')
  @response(200, {
    description: 'Tippersonatec model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tippersonatec) where?: Where<Tippersonatec>,
  ): Promise<Count> {
    return this.tippersonatecRepository.count(where);
  }

  @get('/tippersonatec')
  @response(200, {
    description: 'Array of Tippersonatec model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tippersonatec, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tippersonatec) filter?: Filter<Tippersonatec>,
  ): Promise<Tippersonatec[]> {
    return this.tippersonatecRepository.find(filter);
  }

  @patch('/tippersonatec')
  @response(200, {
    description: 'Tippersonatec PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippersonatec, {partial: true}),
        },
      },
    })
    tippersonatec: Tippersonatec,
    @param.where(Tippersonatec) where?: Where<Tippersonatec>,
  ): Promise<Count> {
    return this.tippersonatecRepository.updateAll(tippersonatec, where);
  }

  @get('/tippersonatec/{id}')
  @response(200, {
    description: 'Tippersonatec model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tippersonatec, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tippersonatec, {exclude: 'where'}) filter?: FilterExcludingWhere<Tippersonatec>
  ): Promise<Tippersonatec> {
    return this.tippersonatecRepository.findById(id, filter);
  }

  @patch('/tippersonatec/{id}')
  @response(204, {
    description: 'Tippersonatec PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippersonatec, {partial: true}),
        },
      },
    })
    tippersonatec: Tippersonatec,
  ): Promise<void> {
    await this.tippersonatecRepository.updateById(id, tippersonatec);
  }

  @put('/tippersonatec/{id}')
  @response(204, {
    description: 'Tippersonatec PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tippersonatec: Tippersonatec,
  ): Promise<void> {
    await this.tippersonatecRepository.replaceById(id, tippersonatec);
  }

  @del('/tippersonatec/{id}')
  @response(204, {
    description: 'Tippersonatec DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tippersonatecRepository.deleteById(id);
  }
}
