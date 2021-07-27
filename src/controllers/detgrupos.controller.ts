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
import {Detgrupos} from '../models';
import {DetgruposRepository} from '../repositories';

export class DetgruposController {
  constructor(
    @repository(DetgruposRepository)
    public detgruposRepository : DetgruposRepository,
  ) {}

  @post('/detgrupos')
  @response(200, {
    description: 'Detgrupos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Detgrupos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detgrupos, {
            title: 'NewDetgrupos',
            exclude: ['id_det_grupo'],
          }),
        },
      },
    })
    detgrupos: Omit<Detgrupos, 'id_det_grupo'>,
  ): Promise<Detgrupos> {
    return this.detgruposRepository.create(detgrupos);
  }

  @get('/detgrupos/count')
  @response(200, {
    description: 'Detgrupos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Detgrupos) where?: Where<Detgrupos>,
  ): Promise<Count> {
    return this.detgruposRepository.count(where);
  }

  @get('/detgrupos')
  @response(200, {
    description: 'Array of Detgrupos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Detgrupos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Detgrupos) filter?: Filter<Detgrupos>,
  ): Promise<Detgrupos[]> {
    return this.detgruposRepository.find(filter);
  }

  @patch('/detgrupos')
  @response(200, {
    description: 'Detgrupos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detgrupos, {partial: true}),
        },
      },
    })
    detgrupos: Detgrupos,
    @param.where(Detgrupos) where?: Where<Detgrupos>,
  ): Promise<Count> {
    return this.detgruposRepository.updateAll(detgrupos, where);
  }

  @get('/detgrupos/{id}')
  @response(200, {
    description: 'Detgrupos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Detgrupos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Detgrupos, {exclude: 'where'}) filter?: FilterExcludingWhere<Detgrupos>
  ): Promise<Detgrupos> {
    return this.detgruposRepository.findById(id, filter);
  }

  @patch('/detgrupos/{id}')
  @response(204, {
    description: 'Detgrupos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detgrupos, {partial: true}),
        },
      },
    })
    detgrupos: Detgrupos,
  ): Promise<void> {
    await this.detgruposRepository.updateById(id, detgrupos);
  }

  @put('/detgrupos/{id}')
  @response(204, {
    description: 'Detgrupos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detgrupos: Detgrupos,
  ): Promise<void> {
    await this.detgruposRepository.replaceById(id, detgrupos);
  }

  @del('/detgrupos/{id}')
  @response(204, {
    description: 'Detgrupos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detgruposRepository.deleteById(id);
  }
}
