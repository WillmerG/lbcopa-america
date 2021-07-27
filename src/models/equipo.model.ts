import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_equipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  id_copa: string;

  @property({
    type: 'number',
    required: true,
  })
  id_pais: number;

  @property({
    type: 'number',
    required: true,
  })
  id_persona: number;


  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
