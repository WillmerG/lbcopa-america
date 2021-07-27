import {Entity, model, property} from '@loopback/repository';

@model()
export class Paises extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_pais?: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_pais: string;


  constructor(data?: Partial<Paises>) {
    super(data);
  }
}

export interface PaisesRelations {
  // describe navigational properties here
}

export type PaisesWithRelations = Paises & PaisesRelations;
