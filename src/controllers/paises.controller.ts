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
import {Paises} from '../models';
import {PaisesRepository} from '../repositories';

export class PaisesController {
  constructor(
    @repository(PaisesRepository)
    public paisesRepository : PaisesRepository,
  ) {}

  @post('/paises')
  @response(200, {
    description: 'Paises model instance',
    content: {'application/json': {schema: getModelSchemaRef(Paises)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paises, {
            title: 'NewPaises',
            exclude: ['id_pais'],
          }),
        },
      },
    })
    paises: Omit<Paises, 'id_pais'>,
  ): Promise<Paises> {
    return this.paisesRepository.create(paises);
  }

  @get('/paises/count')
  @response(200, {
    description: 'Paises model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Paises) where?: Where<Paises>,
  ): Promise<Count> {
    return this.paisesRepository.count(where);
  }

  @get('/paises')
  @response(200, {
    description: 'Array of Paises model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Paises, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Paises) filter?: Filter<Paises>,
  ): Promise<Paises[]> {
    return this.paisesRepository.find(filter);
  }

  @patch('/paises')
  @response(200, {
    description: 'Paises PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paises, {partial: true}),
        },
      },
    })
    paises: Paises,
    @param.where(Paises) where?: Where<Paises>,
  ): Promise<Count> {
    return this.paisesRepository.updateAll(paises, where);
  }

  @get('/paises/{id}')
  @response(200, {
    description: 'Paises model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Paises, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Paises, {exclude: 'where'}) filter?: FilterExcludingWhere<Paises>
  ): Promise<Paises> {
    return this.paisesRepository.findById(id, filter);
  }

  @patch('/paises/{id}')
  @response(204, {
    description: 'Paises PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paises, {partial: true}),
        },
      },
    })
    paises: Paises,
  ): Promise<void> {
    await this.paisesRepository.updateById(id, paises);
  }

  @put('/paises/{id}')
  @response(204, {
    description: 'Paises PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() paises: Paises,
  ): Promise<void> {
    await this.paisesRepository.replaceById(id, paises);
  }

  @del('/paises/{id}')
  @response(204, {
    description: 'Paises DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.paisesRepository.deleteById(id);
  }
}
