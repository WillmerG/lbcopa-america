import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Puntos, PuntosRelations} from '../models';

export class PuntosRepository extends DefaultCrudRepository<
  Puntos,
  typeof Puntos.prototype.id_puntos,
  PuntosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Puntos, dataSource);
  }
}
