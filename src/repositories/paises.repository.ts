import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Paises, PaisesRelations} from '../models';

export class PaisesRepository extends DefaultCrudRepository<
  Paises,
  typeof Paises.prototype.id_pais,
  PaisesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Paises, dataSource);
  }
}
