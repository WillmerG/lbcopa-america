import {Entity, model, property} from '@loopback/repository';

@model()
export class Personastec extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_persona?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_tipoPersona: number;

  @property({
    type: 'number',
    required: true,
  })
  id_pais: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_persona: string;


  constructor(data?: Partial<Personastec>) {
    super(data);
  }
}

export interface PersonastecRelations {
  // describe navigational properties here
}

export type PersonastecWithRelations = Personastec & PersonastecRelations;
