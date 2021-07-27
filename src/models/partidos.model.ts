import {Entity, model, property} from '@loopback/repository';

@model()
export class Partidos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_partido?: number;

  @property({
    type: 'string',
    required: true,
  })
  id_copa: string;

  @property({
    type: 'number',
    required: true,
  })
  id_tipoPartidos: number;

  @property({
    type: 'number',
    required: true,
  })
  id_sede: number;

  @property({
    type: 'date',
    required: true,
  })
  dt_partido: string;

  @property({
    type: 'string',
    required: true,
  })
  hr_partido: string;

  @property({
    type: 'number',
    required: true,
  })
  id_equipo1: number;

  @property({
    type: 'number',
    required: true,
  })
  nu_goles1: number;

  @property({
    type: 'number',
    required: true,
  })
  id_equipo2: number;

  @property({
    type: 'number',
    required: true,
  })
  nu_goles2: number;

  @property({
    type: 'number',
    required: true,
  })
  id_persona: number;

  @property({
    type: 'number',
    required: true,
  })
  id_persona_var: number;


  constructor(data?: Partial<Partidos>) {
    super(data);
  }
}

export interface PartidosRelations {
  // describe navigational properties here
}

export type PartidosWithRelations = Partidos & PartidosRelations;
