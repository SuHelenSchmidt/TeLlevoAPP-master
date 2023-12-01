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
    // Validar el formulario antes de enviarlo
    if (this.validarFormulario()) {
      this.viajeService.agregarViaje(this.nuevoViaje)
        .then(() => {
          // Limpiar el formulario después de agregar el viaje
          this.nuevoViaje = {
            lugarInicio: '',
            lugarFinal: '',
            asientosDisponibles: 0,
            hora: '',
          };
  
          console.log('Viaje agregado exitosamente.');
        })
        .catch(error => {
          console.error('Error al agregar viaje', error);
        });
    } else {
      console.error('El formulario no es válido. Por favor, complete todos los campos.');
    }
  }
  

  private validarFormulario(): boolean {
    // Implementa la lógica de validación según tus necesidades
    return (
      this.nuevoViaje.lugarInicio.trim() !== '' &&
      this.nuevoViaje.lugarFinal.trim() !== '' &&
      this.nuevoViaje.asientosDisponibles > 0 &&
      this.nuevoViaje.hora.trim() !== ''
    );
  }
}
