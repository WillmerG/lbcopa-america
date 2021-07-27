import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Partidos, PartidosRelations} from '../models';

export class PartidosRepository extends DefaultCrudRepository<
  Partidos,
  typeof Partidos.prototype.id_partido,
  PartidosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Partidos, dataSource);
  }
}
