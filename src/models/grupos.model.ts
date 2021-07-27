import {Entity, model, property} from '@loopback/repository';

@model()
export class Grupos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_grupo?: number;

  @property({
    type: 'string',
    required: true,
  })
  id_copa: string;

  @property({
    type: 'string',
    required: true,
  })
  tx_grupo: string;


  constructor(data?: Partial<Grupos>) {
    super(data);
  }
}

export interface GruposRelations {
  // describe navigational properties here
}

export type GruposWithRelations = Grupos & GruposRelations;
