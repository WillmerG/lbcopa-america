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
import {Penaltis} from '../models';
import {PenaltisRepository} from '../repositories';

export class PenaltisController {
  constructor(
    @repository(PenaltisRepository)
    public penaltisRepository : PenaltisRepository,
  ) {}

  @post('/penaltis')
  @response(200, {
    description: 'Penaltis model instance',
    content: {'application/json': {schema: getModelSchemaRef(Penaltis)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Penaltis, {
            title: 'NewPenaltis',
            exclude: ['id_penaltis'],
          }),
        },
      },
    })
    penaltis: Omit<Penaltis, 'id_penaltis'>,
  ): Promise<Penaltis> {
    return this.penaltisRepository.create(penaltis);
  }

  @get('/penaltis/count')
  @response(200, {
    description: 'Penaltis model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Penaltis) where?: Where<Penaltis>,
  ): Promise<Count> {
    return this.penaltisRepository.count(where);
  }

  @get('/penaltis')
  @response(200, {
    description: 'Array of Penaltis model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Penaltis, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Penaltis) filter?: Filter<Penaltis>,
  ): Promise<Penaltis[]> {
    return this.penaltisRepository.find(filter);
  }

  @patch('/penaltis')
  @response(200, {
    description: 'Penaltis PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Penaltis, {partial: true}),
        },
      },
    })
    penaltis: Penaltis,
    @param.where(Penaltis) where?: Where<Penaltis>,
  ): Promise<Count> {
    return this.penaltisRepository.updateAll(penaltis, where);
  }

  @get('/penaltis/{id}')
  @response(200, {
    description: 'Penaltis model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Penaltis, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Penaltis, {exclude: 'where'}) filter?: FilterExcludingWhere<Penaltis>
  ): Promise<Penaltis> {
    return this.penaltisRepository.findById(id, filter);
  }

  @patch('/penaltis/{id}')
  @response(204, {
    description: 'Penaltis PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Penaltis, {partial: true}),
        },
      },
    })
    penaltis: Penaltis,
  ): Promise<void> {
    await this.penaltisRepository.updateById(id, penaltis);
  }

  @put('/penaltis/{id}')
  @response(204, {
    description: 'Penaltis PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() penaltis: Penaltis,
  ): Promise<void> {
    await this.penaltisRepository.replaceById(id, penaltis);
  }

  @del('/penaltis/{id}')
  @response(204, {
    description: 'Penaltis DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.penaltisRepository.deleteById(id);
  }
}
