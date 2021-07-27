import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Posicion, PosicionRelations} from '../models';

export class PosicionRepository extends DefaultCrudRepository<
  Posicion,
  typeof Posicion.prototype.id_posicion,
  PosicionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Posicion, dataSource);
  }
}
