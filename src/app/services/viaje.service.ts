import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  viajes: any[] = []; // Declarar la propiedad viajes
  constructor(private sqlite: SQLite) {
    /*this.crearTablaViajes();*/
  }

  private crearTablaViajes() {
    this.sqlite.create({
      name: 'DBMovil.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS viajes (id INTEGER PRIMARY KEY AUTOINCREMENT, lugarInicio TEXT, lugarFinal TEXT, asientosDisponibles INTEGER, hora TEXT)', [])
        .then(() => console.log('Tabla viajes creada'))
        .catch(error => console.error('Error al crear tabla viajes', error));
    }).catch(error => console.error('Error al abrir la base de datos', error));
  }

  agregarViaje(nuevoViaje: any) {
    this.sqlite.create({
      name: 'tu_base_de_datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO viajes (lugarInicio, lugarFinal, asientosDisponibles, hora) VALUES (?, ?, ?, ?)',
        [nuevoViaje.lugarInicio, nuevoViaje.lugarFinal, nuevoViaje.asientosDisponibles, nuevoViaje.hora])
        .then(() => console.log('Viaje agregado'))
        .catch(error => console.error('Error al agregar viaje', error));
    }).catch(error => console.error('Error al abrir la base de datos', error));
  }

  modificarViaje(id: number, viaje: any) {
    this.sqlite.create({
      name: 'tu_base_de_datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE viajes SET lugarInicio=?, lugarFinal=?, asientosDisponibles=?, hora=? WHERE id=?',
        [viaje.lugarInicio, viaje.lugarFinal, viaje.asientosDisponibles, viaje.hora, id])
        .then(() => console.log('Viaje modificado'))
        .catch(error => console.error('Error al modificar viaje', error));
    }).catch(error => console.error('Error al abrir la base de datos', error));
  }

  listarViajes() {
    return this.sqlite.create({
      name: 'tu_base_de_datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM viajes', [])
        .then(data => {
          let viajes = [];
          for (let i = 0; i < data.rows.length; i++) {
            viajes.push(data.rows.item(i));
          }
          return viajes;
        })
        .catch(error => console.error('Error al listar viajes', error));
    }).catch(error => console.error('Error al abrir la base de datos', error));
  }

  elegirViaje(id: number) {
    return this.sqlite.create({
      name: 'tu_base_de_datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM viajes WHERE id=?', [id])
        .then(data => {
          if (data.rows.length > 0) {
            return data.rows.item(0);
          } else {
            return null;
          }
        })
        .catch(error => console.error('Error al elegir viaje', error));
    }).catch(error => console.error('Error al abrir la base de datos', error));
  }

  tomarAsiento(idViaje: number, asiento: number) {
    // Aquí puedes realizar la lógica para actualizar la disponibilidad del asiento en la base de datos.
    // Puedes agregar una columna "asientosDisponibles" en tu tabla y actualizarla según sea necesario.
    console.log(`Tomar asiento ${asiento} en el viaje ${idViaje}`);
  }
}