import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Personastec, PersonastecRelations} from '../models';

export class PersonastecRepository extends DefaultCrudRepository<
  Personastec,
  typeof Personastec.prototype.id_persona,
  PersonastecRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Personastec, dataSource);
  }
}
