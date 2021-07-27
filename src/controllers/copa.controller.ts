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
import {Copa} from '../models';
import {CopaRepository} from '../repositories';

export class CopaController {
  constructor(
    @repository(CopaRepository)
    public copaRepository : CopaRepository,
  ) {}

  @post('/copas')
  @response(200, {
    description: 'Copa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Copa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Copa, {
            title: 'NewCopa',
            
          }),
        },
      },
    })
    copa: Copa,
  ): Promise<Copa> {
    return this.copaRepository.create(copa);
  }

  @get('/copas/count')
  @response(200, {
    description: 'Copa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Copa) where?: Where<Copa>,
  ): Promise<Count> {
    return this.copaRepository.count(where);
  }

  @get('/copas')
  @response(200, {
    description: 'Array of Copa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Copa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Copa) filter?: Filter<Copa>,
  ): Promise<Copa[]> {
    return this.copaRepository.find(filter);
  }

  @patch('/copas')
  @response(200, {
    description: 'Copa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Copa, {partial: true}),
        },
      },
    })
    copa: Copa,
    @param.where(Copa) where?: Where<Copa>,
  ): Promise<Count> {
    return this.copaRepository.updateAll(copa, where);
  }

  @get('/copas/{id}')
  @response(200, {
    description: 'Copa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Copa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Copa, {exclude: 'where'}) filter?: FilterExcludingWhere<Copa>
  ): Promise<Copa> {
    return this.copaRepository.findById(id, filter);
  }

  @patch('/copas/{id}')
  @response(204, {
    description: 'Copa PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Copa, {partial: true}),
        },
      },
    })
    copa: Copa,
  ): Promise<void> {
    await this.copaRepository.updateById(id, copa);
  }

  @put('/copas/{id}')
  @response(204, {
    description: 'Copa PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() copa: Copa,
  ): Promise<void> {
    await this.copaRepository.replaceById(id, copa);
  }

  @del('/copas/{id}')
  @response(204, {
    description: 'Copa DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.copaRepository.deleteById(id);
  }
}
