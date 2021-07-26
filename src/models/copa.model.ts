import {Entity, model, property} from '@loopback/repository';

@model()
export class Copa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id_copa: string;

  @property({
    type: 'date',
    required: true,
  })
  dt_fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  tx_edicion: string;

  @property({
    type: 'string',
    required: true,
  })
  tx_organizador: string;

  @property({
    type: 'string',
  })
  tx_balon?: string;

  @property({
    type: 'string',
  })
  tx_mascota?: string;

  @property({
    type: 'string',
  })
  tx_cancion?: string;


  constructor(data?: Partial<Copa>) {
    super(data);
  }
}

export interface CopaRelations {
  // describe navigational properties here
}

export type CopaWithRelations = Copa & CopaRelations;
