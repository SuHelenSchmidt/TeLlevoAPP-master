import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  verificarCredenciales(nombre: any, password: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router, private sqlite: SQLite) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(MAIl VARCHAR(75), CONTRASENA VARCHAR(30))', []).then(() => {
        console.log('TABLA CREADA OK');
      }).catch(e => {
        console.log('TABLA NOK');
      }).catch(e => {
        console.log('BASE DE DATOS NOK');
      });
    })
  }
  almacenarUsuario(correo: string, contrasena: string) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO USUARIO VALUES(?, ?)', [correo, contrasena]).then(() => {
        console.log('FRS: USUARIO ALMACENADO OK');
      }).catch(e => {
        console.log('FRS: USUARIO NO ALMACENADO ');
      }).catch(e => {
        console.log('FRS: BASE DE DATOS NOK');
      });
    });
  }
}
  