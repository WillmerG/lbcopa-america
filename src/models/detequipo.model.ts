import {Entity, model, property} from '@loopback/repository';

@model()
export class Detequipo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_det_equipo?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_equipo: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jugador: number;


  constructor(data?: Partial<Detequipo>) {
    super(data);
  }
}

export interface DetequipoRelations {
  // describe navigational properties here
}

export type DetequipoWithRelations = Detequipo & DetequipoRelations;
