import {Entity, model, property} from '@loopback/repository';

@model()
export class Penaltis extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_penaltis?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_partido: number;

  @property({
    type: 'number',
    required: true,
  })
  id_equipo: number;

  @property({
    type: 'number',
    required: true,
  })
  nu_goles: number;


  constructor(data?: Partial<Penaltis>) {
    super(data);
  }
}

export interface PenaltisRelations {
  // describe navigational properties here
}

export type PenaltisWithRelations = Penaltis & PenaltisRelations;
