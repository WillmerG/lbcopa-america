import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Tippersonatec, TippersonatecRelations} from '../models';

export class TippersonatecRepository extends DefaultCrudRepository<
  Tippersonatec,
  typeof Tippersonatec.prototype.id_tipoPersona,
  TippersonatecRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tippersonatec, dataSource);
  }
}
