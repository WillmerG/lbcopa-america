import {Entity, model, property} from '@loopback/repository';

@model()
export class Club extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_club?: number;

  @property({
    type: 'string',
    required: true,
  })
  tx_club: string;


  constructor(data?: Partial<Club>) {
    super(data);
  }
}

export interface ClubRelations {
  // describe navigational properties here
}

export type ClubWithRelations = Club & ClubRelations;
