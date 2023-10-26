import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el Router en el constructor

  ngOnInit() {
  }

  redirigirAlMenu() {
    this.router.navigate(['/menu']); // Reemplaza '/menu' con la ruta real a tu menú
  }
}
