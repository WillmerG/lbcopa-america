import {Entity, model, property} from '@loopback/repository';

@model()
export class Posicion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_posicion?: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_posicion: string;


  constructor(data?: Partial<Posicion>) {
    super(data);
  }
}

export interface PosicionRelations {
  // describe navigational properties here
}

export type PosicionWithRelations = Posicion & PosicionRelations;
