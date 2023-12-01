import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  viajes: any[] = [];

  agregarViaje(viaje: any) {
    this.viajes.push(viaje);
  }

  modificarViaje(id: number, viaje: any) {
    this.viajes[id] = viaje;
  }

  listarViajes() {
    return this.viajes;
  }

  elegirViaje(id: number) {
    return this.viajes[id];
  }

  tomarAsiento(idViaje: number, asiento: number) {
    this.viajes[idViaje].asientos_disponibles[asiento] = false;
  }
}