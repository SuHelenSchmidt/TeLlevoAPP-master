import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el Router en el constructor

  ngOnInit() {
  }

  redirigirAlMenu() {
    this.router.navigate(['/menu']); // Reemplaza '/menu' con la ruta real a tu menú
  }
}

