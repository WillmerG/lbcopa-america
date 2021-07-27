import {Entity, model, property} from '@loopback/repository';

@model()
export class Detsedes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_det_sedes?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_sedes: number;

  @property({
    type: 'string',
    required: true,
  })
  id_copa: string;


  constructor(data?: Partial<Detsedes>) {
    super(data);
  }
}

export interface DetsedesRelations {
  // describe navigational properties here
}

export type DetsedesWithRelations = Detsedes & DetsedesRelations;
