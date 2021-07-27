import {Entity, model, property} from '@loopback/repository';

@model()
export class Jugadores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_jugador?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_club: number;

  @property({
    type: 'number',
    required: true,
  })
  id_posicion: number;

  @property({
    type: 'number',
    required: true,
  })
  nu_camiseta: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  tx_nombres: string;

  @property({
    type: 'string',
  })
  tx_sobrenombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  nm_camiseta: string;

  @property({
    type: 'date',
    required: true,
  })
  dt_nacimiento: string;

  @property({
    type: 'date',
  })
  dt_venc_pass?: string;

  @property({
    type: 'string',
  })
  nu_pasaporte?: string;

  @property({
    type: 'number',
  })
  nu_peso?: number;

  @property({
    type: 'number',
  })
  fl_altura?: number;


  constructor(data?: Partial<Jugadores>) {
    super(data);
  }
}

export interface JugadoresRelations {
  // describe navigational properties here
}

export type JugadoresWithRelations = Jugadores & JugadoresRelations;
