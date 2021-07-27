import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Detsedes, DetsedesRelations} from '../models';

export class DetsedesRepository extends DefaultCrudRepository<
  Detsedes,
  typeof Detsedes.prototype.id_det_sedes,
  DetsedesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Detsedes, dataSource);
  }
}
