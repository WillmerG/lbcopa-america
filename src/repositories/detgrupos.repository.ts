import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Detgrupos, DetgruposRelations} from '../models';

export class DetgruposRepository extends DefaultCrudRepository<
  Detgrupos,
  typeof Detgrupos.prototype.id_det_grupo,
  DetgruposRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Detgrupos, dataSource);
  }
}
