import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Penaltis, PenaltisRelations} from '../models';

export class PenaltisRepository extends DefaultCrudRepository<
  Penaltis,
  typeof Penaltis.prototype.id_penaltis,
  PenaltisRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Penaltis, dataSource);
  }
}
