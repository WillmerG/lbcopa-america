import {Entity, model, property} from '@loopback/repository';

@model()
export class Puntos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_puntos?: number;

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
  })
  nu_partidosJugados?: number;

  @property({
    type: 'number',
  })
  nu_partidosGanados?: number;

  @property({
    type: 'number',
  })
  nu_partidosEmpatados?: number;

  @property({
    type: 'number',
  })
  nu_partidosPerdidos?: number;

  @property({
    type: 'number',
  })
  nu_golesFavor?: number;

  @property({
    type: 'number',
  })
  nu_golesContra?: number;


  constructor(data?: Partial<Puntos>) {
    super(data);
  }
}

export interface PuntosRelations {
  // describe navigational properties here
}

export type PuntosWithRelations = Puntos & PuntosRelations;
