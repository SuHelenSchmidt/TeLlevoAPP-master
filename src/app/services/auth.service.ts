import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  actualizarUsuario(nuevosDatos: any) {
    throw new Error('Method not implemented.');
  }
  private usuario: any = {}; // Puedes definir una interfaz para el usuario si es más complejo

  getUsuario() {
    return this.usuario;
  }

  setUsuario(nuevoUsuario: any) {
    this.usuario = nuevoUsuario;
  }
}