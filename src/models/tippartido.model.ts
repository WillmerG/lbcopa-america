import {Entity, model, property} from '@loopback/repository';

@model()
export class Tippartido extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_tipoPartidos?: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_partidos: string;


  constructor(data?: Partial<Tippartido>) {
    super(data);
  }
}

export interface TippartidoRelations {
  // describe navigational properties here
}

export type TippartidoWithRelations = Tippartido & TippartidoRelations;
