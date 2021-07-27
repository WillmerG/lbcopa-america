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
import {Detequipo} from '../models';
import {DetequipoRepository} from '../repositories';

export class DetequipoController {
  constructor(
    @repository(DetequipoRepository)
    public detequipoRepository : DetequipoRepository,
  ) {}

  @post('/detequipos')
  @response(200, {
    description: 'Detequipo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Detequipo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detequipo, {
            title: 'NewDetequipo',
            exclude: ['id_det_equipo'],
          }),
        },
      },
    })
    detequipo: Omit<Detequipo, 'id_det_equipo'>,
  ): Promise<Detequipo> {
    return this.detequipoRepository.create(detequipo);
  }

  @get('/detequipos/count')
  @response(200, {
    description: 'Detequipo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Detequipo) where?: Where<Detequipo>,
  ): Promise<Count> {
    return this.detequipoRepository.count(where);
  }

  @get('/detequipos')
  @response(200, {
    description: 'Array of Detequipo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Detequipo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Detequipo) filter?: Filter<Detequipo>,
  ): Promise<Detequipo[]> {
    return this.detequipoRepository.find(filter);
  }

  @patch('/detequipos')
  @response(200, {
    description: 'Detequipo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detequipo, {partial: true}),
        },
      },
    })
    detequipo: Detequipo,
    @param.where(Detequipo) where?: Where<Detequipo>,
  ): Promise<Count> {
    return this.detequipoRepository.updateAll(detequipo, where);
  }

  @get('/detequipos/{id}')
  @response(200, {
    description: 'Detequipo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Detequipo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Detequipo, {exclude: 'where'}) filter?: FilterExcludingWhere<Detequipo>
  ): Promise<Detequipo> {
    return this.detequipoRepository.findById(id, filter);
  }

  @patch('/detequipos/{id}')
  @response(204, {
    description: 'Detequipo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detequipo, {partial: true}),
        },
      },
    })
    detequipo: Detequipo,
  ): Promise<void> {
    await this.detequipoRepository.updateById(id, detequipo);
  }

  @put('/detequipos/{id}')
  @response(204, {
    description: 'Detequipo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detequipo: Detequipo,
  ): Promise<void> {
    await this.detequipoRepository.replaceById(id, detequipo);
  }

  @del('/detequipos/{id}')
  @response(204, {
    description: 'Detequipo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detequipoRepository.deleteById(id);
  }
}
