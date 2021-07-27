import {Entity, model, property} from '@loopback/repository';

@model()
export class Sedes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_sedes?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_pais: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_lugar: string;

  @property({
    type: 'string',
    required: true,
  })
  tx_nombre: string;

  @property({
    type: 'number',
  })
  nu_capacidad?: number;


  constructor(data?: Partial<Sedes>) {
    super(data);
  }
}

export interface SedesRelations {
  // describe navigational properties here
}

export type SedesWithRelations = Sedes & SedesRelations;
