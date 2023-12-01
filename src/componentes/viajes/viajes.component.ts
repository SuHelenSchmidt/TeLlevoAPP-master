import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent    {

  constructor(private viajeService: ViajeService) {}

  agregarViaje(viaje: any) {
    this.viajeService.agregarViaje(viaje);
  }

  modificarViaje(id: number, viaje: any) {
    this.viajeService.modificarViaje(id, viaje);
  }

  listarViajes() {
    return this.viajeService.listarViajes();
  }

  elegirViaje(id: number) {
    return this.viajeService.elegirViaje(id);
  }

  tomarAsiento(idViaje: number, asiento: number) {
    this.viajeService.tomarAsiento(idViaje, asiento);
  }
}