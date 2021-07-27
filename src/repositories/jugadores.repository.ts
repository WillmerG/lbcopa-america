import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jugadores, JugadoresRelations} from '../models';

export class JugadoresRepository extends DefaultCrudRepository<
  Jugadores,
  typeof Jugadores.prototype.id_jugador,
  JugadoresRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Jugadores, dataSource);
  }
}
