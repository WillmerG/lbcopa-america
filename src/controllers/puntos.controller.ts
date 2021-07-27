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
import {Puntos} from '../models';
import {PuntosRepository} from '../repositories';

export class PuntosController {
  constructor(
    @repository(PuntosRepository)
    public puntosRepository : PuntosRepository,
  ) {}

  @post('/puntos')
  @response(200, {
    description: 'Puntos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Puntos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntos, {
            title: 'NewPuntos',
            exclude: ['id_puntos'],
          }),
        },
      },
    })
    puntos: Omit<Puntos, 'id_puntos'>,
  ): Promise<Puntos> {
    return this.puntosRepository.create(puntos);
  }

  @get('/puntos/count')
  @response(200, {
    description: 'Puntos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Puntos) where?: Where<Puntos>,
  ): Promise<Count> {
    return this.puntosRepository.count(where);
  }

  @get('/puntos')
  @response(200, {
    description: 'Array of Puntos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Puntos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Puntos) filter?: Filter<Puntos>,
  ): Promise<Puntos[]> {
    return this.puntosRepository.find(filter);
  }

  @patch('/puntos')
  @response(200, {
    description: 'Puntos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntos, {partial: true}),
        },
      },
    })
    puntos: Puntos,
    @param.where(Puntos) where?: Where<Puntos>,
  ): Promise<Count> {
    return this.puntosRepository.updateAll(puntos, where);
  }

  @get('/puntos/{id}')
  @response(200, {
    description: 'Puntos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Puntos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Puntos, {exclude: 'where'}) filter?: FilterExcludingWhere<Puntos>
  ): Promise<Puntos> {
    return this.puntosRepository.findById(id, filter);
  }

  @patch('/puntos/{id}')
  @response(204, {
    description: 'Puntos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntos, {partial: true}),
        },
      },
    })
    puntos: Puntos,
  ): Promise<void> {
    await this.puntosRepository.updateById(id, puntos);
  }

  @put('/puntos/{id}')
  @response(204, {
    description: 'Puntos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() puntos: Puntos,
  ): Promise<void> {
    await this.puntosRepository.replaceById(id, puntos);
  }

  @del('/puntos/{id}')
  @response(204, {
    description: 'Puntos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.puntosRepository.deleteById(id);
  }
}
