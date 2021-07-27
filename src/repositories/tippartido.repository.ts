import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tippartido, TippartidoRelations} from '../models';

export class TippartidoRepository extends DefaultCrudRepository<
  Tippartido,
  typeof Tippartido.prototype.id_tipoPartidos,
  TippartidoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tippartido, dataSource);
  }
}
