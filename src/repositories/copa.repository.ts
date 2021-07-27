import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Copa, CopaRelations} from '../models';

export class CopaRepository extends DefaultCrudRepository<
  Copa,
  typeof Copa.prototype.id_copa,
  CopaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Copa, dataSource);
  }
}
