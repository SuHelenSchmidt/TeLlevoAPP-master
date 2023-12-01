// conductor.page.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService } from '../services/viaje.service';
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  nuevoViaje: any = {
    lugarInicio: '',
    lugarFinal: '',
    asientosDisponibles: 0,
    hora: '',
  };

  constructor(
    private router: Router,
    private viajeService: ViajeService
  ) { }

  ngOnInit() {
  }

  redirigirAlMenu() {
    this.router.navigate(['/menu']);
  }

  agregarViaje() {
    this.viajeService.agregarViaje(this.nuevoViaje);
    this.nuevoViaje = {
      lugarInicio: '',
      lugarFinal: '',
      asientosDisponibles: 0,
      hora: '',
    };
  }
}
