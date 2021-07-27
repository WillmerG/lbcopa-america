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
import {Tippartido} from '../models';
import {TippartidoRepository} from '../repositories';

export class TippartidoController {
  constructor(
    @repository(TippartidoRepository)
    public tippartidoRepository : TippartidoRepository,
  ) {}

  @post('/tippartido')
  @response(200, {
    description: 'Tippartido model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tippartido)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippartido, {
            title: 'NewTippartido',
            exclude: ['id_tipoPartidos'],
          }),
        },
      },
    })
    tippartido: Omit<Tippartido, 'id_tipoPartidos'>,
  ): Promise<Tippartido> {
    return this.tippartidoRepository.create(tippartido);
  }

  @get('/tippartido/count')
  @response(200, {
    description: 'Tippartido model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tippartido) where?: Where<Tippartido>,
  ): Promise<Count> {
    return this.tippartidoRepository.count(where);
  }

  @get('/tippartido')
  @response(200, {
    description: 'Array of Tippartido model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tippartido, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tippartido) filter?: Filter<Tippartido>,
  ): Promise<Tippartido[]> {
    return this.tippartidoRepository.find(filter);
  }

  @patch('/tippartido')
  @response(200, {
    description: 'Tippartido PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippartido, {partial: true}),
        },
      },
    })
    tippartido: Tippartido,
    @param.where(Tippartido) where?: Where<Tippartido>,
  ): Promise<Count> {
    return this.tippartidoRepository.updateAll(tippartido, where);
  }

  @get('/tippartido/{id}')
  @response(200, {
    description: 'Tippartido model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tippartido, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tippartido, {exclude: 'where'}) filter?: FilterExcludingWhere<Tippartido>
  ): Promise<Tippartido> {
    return this.tippartidoRepository.findById(id, filter);
  }

  @patch('/tippartido/{id}')
  @response(204, {
    description: 'Tippartido PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tippartido, {partial: true}),
        },
      },
    })
    tippartido: Tippartido,
  ): Promise<void> {
    await this.tippartidoRepository.updateById(id, tippartido);
  }

  @put('/tippartido/{id}')
  @response(204, {
    description: 'Tippartido PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tippartido: Tippartido,
  ): Promise<void> {
    await this.tippartidoRepository.replaceById(id, tippartido);
  }

  @del('/tippartido/{id}')
  @response(204, {
    description: 'Tippartido DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tippartidoRepository.deleteById(id);
  }
}
