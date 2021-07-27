import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Grupos, GruposRelations} from '../models';

export class GruposRepository extends DefaultCrudRepository<
  Grupos,
  typeof Grupos.prototype.id_grupo,
  GruposRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Grupos, dataSource);
  }
}
