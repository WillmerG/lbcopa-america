import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Detequipo, DetequipoRelations} from '../models';

export class DetequipoRepository extends DefaultCrudRepository<
  Detequipo,
  typeof Detequipo.prototype.id_det_equipo,
  DetequipoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Detequipo, dataSource);
  }
}
