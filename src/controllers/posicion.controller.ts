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
import {Posicion} from '../models';
import {PosicionRepository} from '../repositories';

export class PosicionController {
  constructor(
    @repository(PosicionRepository)
    public posicionRepository : PosicionRepository,
  ) {}

  @post('/posicion')
  @response(200, {
    description: 'Posicion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Posicion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posicion, {
            title: 'NewPosicion',
            exclude: ['id_posicion'],
          }),
        },
      },
    })
    posicion: Omit<Posicion, 'id_posicion'>,
  ): Promise<Posicion> {
    return this.posicionRepository.create(posicion);
  }

  @get('/posicion/count')
  @response(200, {
    description: 'Posicion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Posicion) where?: Where<Posicion>,
  ): Promise<Count> {
    return this.posicionRepository.count(where);
  }

  @get('/posicion')
  @response(200, {
    description: 'Array of Posicion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Posicion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Posicion) filter?: Filter<Posicion>,
  ): Promise<Posicion[]> {
    return this.posicionRepository.find(filter);
  }

  @patch('/posicion')
  @response(200, {
    description: 'Posicion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posicion, {partial: true}),
        },
      },
    })
    posicion: Posicion,
    @param.where(Posicion) where?: Where<Posicion>,
  ): Promise<Count> {
    return this.posicionRepository.updateAll(posicion, where);
  }

  @get('/posicion/{id}')
  @response(200, {
    description: 'Posicion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Posicion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Posicion, {exclude: 'where'}) filter?: FilterExcludingWhere<Posicion>
  ): Promise<Posicion> {
    return this.posicionRepository.findById(id, filter);
  }

  @patch('/posicion/{id}')
  @response(204, {
    description: 'Posicion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posicion, {partial: true}),
        },
      },
    })
    posicion: Posicion,
  ): Promise<void> {
    await this.posicionRepository.updateById(id, posicion);
  }

  @put('/posicion/{id}')
  @response(204, {
    description: 'Posicion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() posicion: Posicion,
  ): Promise<void> {
    await this.posicionRepository.replaceById(id, posicion);
  }

  @del('/posicion/{id}')
  @response(204, {
    description: 'Posicion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.posicionRepository.deleteById(id);
  }
}
