import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Club, ClubRelations} from '../models';

export class ClubRepository extends DefaultCrudRepository<
  Club,
  typeof Club.prototype.id_club,
  ClubRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Club, dataSource);
  }
}
