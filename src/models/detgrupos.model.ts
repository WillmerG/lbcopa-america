import {Entity, model, property} from '@loopback/repository';

@model()
export class Detgrupos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_det_grupo?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_grupo: number;

  @property({
    type: 'number',
    required: true,
  })
  id_pais: number;


  constructor(data?: Partial<Detgrupos>) {
    super(data);
  }
}

export interface DetgruposRelations {
  // describe navigational properties here
}

export type DetgruposWithRelations = Detgrupos & DetgruposRelations;
