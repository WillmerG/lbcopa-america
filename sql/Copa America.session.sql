CREATE DATABASE IF NOT EXISTS db_copa_america;
CREATE TABLE IF NOT EXISTS Paises (
  id_pais int(11) NOT NULL AUTO_INCREMENT,
  tx_pais VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_pais)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS Copa (
  id_copa VARCHAR(4) NOT NULL,
  dt_fecha DATE NOT NULL,
  tx_edicion VARCHAR(100) NOT NULL,
  tx_organizador VARCHAR(100) NOT NULL,
  tx_balon VARCHAR(100),
  tx_mascota VARCHAR(100),
  tx_cancion VARCHAR(100),
  PRIMARY KEY (id_copa)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS Grupos (
  id_grupo int(11) NOT NULL AUTO_INCREMENT,
  id_copa VARCHAR(4) NOT NULL,
  tx_grupo VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_grupo),
  FOREIGN KEY(id_copa) REFERENCES copa(id_copa) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS DetGrupos(
  id_det_grupo int(11) NOT NULL AUTO_INCREMENT,
  id_grupo int(11) NOT NULL,
  id_pais int(11) NOT NULL,
  PRIMARY KEY (id_det_grupo),
  FOREIGN KEY(id_grupo) REFERENCES grupos(id_grupo) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_pais) REFERENCES paises(id_pais) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE indice01 (id_grupo, id_pais)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS sedes(
  id_sedes int(11) NOT NULL AUTO_INCREMENT,
  id_pais int(11),
  tx_ligar VARCHAR(100),
  tx_nombre VARCHAR(100),
  nu_capacidad int(11),
  PRIMARY KEY (id_sedes),
  FOREIGN KEY(id_pais) REFERENCES paises(id_pais) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS DetSedes (
  id_det_sedes int(11) NOT NULL AUTO_INCREMENT,
  id_sedes int(11) NOT NULL,
  id_copa VARCHAR(4) NOT NULL,
  PRIMARY KEY (id_det_sedes),
  FOREIGN KEY(id_sedes) REFERENCES sedes(id_sedes) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_copa) REFERENCES copa(id_copa) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE indice01 (id_sedes, id_copa)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS TipPersonaTec(
  id_tipoPersona int(11) NOT NULL AUTO_INCREMENT,
  tx_persona VARCHAR(80),
  PRIMARY KEY (id_tipoPersona)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS PersonasTec(
  id_persona int(11) NOT NULL AUTO_INCREMENT,
  id_tipoPersona int(11),
  id_pais int(11),
  tx_persona VARCHAR(100),
  PRIMARY KEY (id_persona),
  FOREIGN KEY(id_tipoPersona) REFERENCES tippersonatec(id_tipoPersona) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_pais) REFERENCES paises(id_pais) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS Equipo(
  id_equipo int(11) NOT NULL AUTO_INCREMENT,
  id_copa VARCHAR(4) NOT NULL,
  id_pais int(11),
  id_persona int(11),
  PRIMARY KEY (id_equipo),
  FOREIGN KEY(id_copa) REFERENCES copa(id_copa) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_pais) REFERENCES paises(id_pais) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_persona) REFERENCES personastec(id_persona) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE indice01 (id_copa, id_pais)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS club (
  id_club int(11) NOT NULL AUTO_INCREMENT,
  tx_club VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_club)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS posicion (
  id_posicion int(11) NOT NULL AUTO_INCREMENT,
  tx_posicion VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_posicion)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS jugadores (
  id_jugador int(11) NOT NULL AUTO_INCREMENT,
  id_club int(11),
  id_posicion int(11),
  nu_camiseta int(2),
  tx_apellidos VARCHAR(100),
  tx_nombres VARCHAR(100),
  tx_sobrenombre VARCHAR(50),
  nm_camiseta VARCHAR(20),
  dt_nacimiento DATE,
  dt_venc_pass DATE,
  nu_pasaporte varchar(10),
  nu_peso int(3),
  fl_altura FLOAT,
  PRIMARY KEY (id_jugador),
  FOREIGN KEY(id_club) REFERENCES club(id_club) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_posicion) REFERENCES posicion(id_posicion) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS DetEquipo(
  id_det_equipo int(11) NOT NULL AUTO_INCREMENT,
  id_equipo int(11),
  id_jugador int(11),
  PRIMARY KEY (id_det_equipo),
  FOREIGN KEY(id_equipo) REFERENCES equipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_jugador) REFERENCES jugadores(id_jugador) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE indice01(id_equipo, id_jugador)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS tippartido(
  id_tipoPartidos int(11) NOT NULL AUTO_INCREMENT,
  tx_partidos VARCHAR(20),
  PRIMARY KEY (id_tipoPartidos)
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS Partidos(
  id_partido int(11) NOT NULL AUTO_INCREMENT,
  id_copa VARCHAR(4) NOT NULL,
  id_tipoPartidos int(11),
  id_sede int(11),
  dt_partido DATE,
  hr_partido TIME,
  id_equipo1 int(11),
  nu_goles1 int(2),
  id_equipo2 int(11),
  nu_goles2 int(2),
  id_persona int(11),
  id_persona_var int(11),
  PRIMARY KEY (id_partido),
  FOREIGN KEY(id_copa) REFERENCES copa(id_copa) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_tipoPartidos) REFERENCES tippartido(id_tipoPartidos) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_sede) REFERENCES sedes(id_sedes) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_equipo1) REFERENCES equipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_equipo2) REFERENCES equipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_persona) REFERENCES personastec(id_persona) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_persona_var) REFERENCES personastec(id_persona) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS penaltis(
  id_penaltis int(11) NOT NULL AUTO_INCREMENT,
  id_partido int(11),
  id_equipo int(11),
  nu_goles int(2),
  PRIMARY KEY (id_penaltis),
  UNIQUE indice01(id_partido, id_equipo),
  FOREIGN KEY(id_partido) REFERENCES partidos(id_partido) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(id_equipo) REFERENCES equipo(id_equipo) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS puntos (
  id_puntos int(11) NOT NULL AUTO_INCREMENT,
  id_copa int(11) NOT NULL,
  id_pais int(11) NOT NULL,
  nu_partidosJugados int(2),
  nu_partidosGanados int(2),
  nu_partidosEmpatados int(2),
  nu_partidosPerdidos int(2),
  nu_golesFavor int(2),
  nu_golesContra int(2),
  PRIMARY KEY (id_puntos),
  UNIQUE indice01 (id_copa, id_pais)
) ENGINE = InnoDB;
