import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Sedes, SedesRelations} from '../models';

export class SedesRepository extends DefaultCrudRepository<
  Sedes,
  typeof Sedes.prototype.id_sedes,
  SedesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sedes, dataSource);
  }
}
