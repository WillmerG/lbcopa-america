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
import {Detsedes} from '../models';
import {DetsedesRepository} from '../repositories';

export class DetsedesController {
  constructor(
    @repository(DetsedesRepository)
    public detsedesRepository : DetsedesRepository,
  ) {}

  @post('/detsedes')
  @response(200, {
    description: 'Detsedes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Detsedes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detsedes, {
            title: 'NewDetsedes',
            exclude: ['id_det_sedes'],
          }),
        },
      },
    })
    detsedes: Omit<Detsedes, 'id_det_sedes'>,
  ): Promise<Detsedes> {
    return this.detsedesRepository.create(detsedes);
  }

  @get('/detsedes/count')
  @response(200, {
    description: 'Detsedes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Detsedes) where?: Where<Detsedes>,
  ): Promise<Count> {
    return this.detsedesRepository.count(where);
  }

  @get('/detsedes')
  @response(200, {
    description: 'Array of Detsedes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Detsedes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Detsedes) filter?: Filter<Detsedes>,
  ): Promise<Detsedes[]> {
    return this.detsedesRepository.find(filter);
  }

  @patch('/detsedes')
  @response(200, {
    description: 'Detsedes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detsedes, {partial: true}),
        },
      },
    })
    detsedes: Detsedes,
    @param.where(Detsedes) where?: Where<Detsedes>,
  ): Promise<Count> {
    return this.detsedesRepository.updateAll(detsedes, where);
  }

  @get('/detsedes/{id}')
  @response(200, {
    description: 'Detsedes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Detsedes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Detsedes, {exclude: 'where'}) filter?: FilterExcludingWhere<Detsedes>
  ): Promise<Detsedes> {
    return this.detsedesRepository.findById(id, filter);
  }

  @patch('/detsedes/{id}')
  @response(204, {
    description: 'Detsedes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detsedes, {partial: true}),
        },
      },
    })
    detsedes: Detsedes,
  ): Promise<void> {
    await this.detsedesRepository.updateById(id, detsedes);
  }

  @put('/detsedes/{id}')
  @response(204, {
    description: 'Detsedes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detsedes: Detsedes,
  ): Promise<void> {
    await this.detsedesRepository.replaceById(id, detsedes);
  }

  @del('/detsedes/{id}')
  @response(204, {
    description: 'Detsedes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detsedesRepository.deleteById(id);
  }
}
