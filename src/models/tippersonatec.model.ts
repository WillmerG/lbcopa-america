import {Entity, model, property} from '@loopback/repository';

@model()
export class Tippersonatec extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_tipoPersona?: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_persona: string;


  constructor(data?: Partial<Tippersonatec>) {
    super(data);
  }
}

export interface TippersonatecRelations {
  // describe navigational properties here
}

export type TippersonatecWithRelations = Tippersonatec & TippersonatecRelations;
