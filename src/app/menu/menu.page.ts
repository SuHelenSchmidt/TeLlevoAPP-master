import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;
  mostrarBienvenida: boolean = false;
  nombreUsuario: string = '';

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Entradas',
      url: '/menu/entradas',
      icono: 'book'
    }
  ]

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    const ingresado = localStorage.getItem('ingresado');
    this.mostrarBienvenida = ingresado === 'true';

    if (this.mostrarBienvenida) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
    }
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  opcionConductor(opcion: string) {
    switch (opcion) {
      case 'conductor':
        this.router.navigate(['/conductor']); // Redirige a la página 'conductor'
        break;
      default:
        break;
    }
  }
  
  opcionViajar(opcion: string) {
    switch (opcion) {
      // Cambiamos 'conductor' a 'viajar'
      case 'viajar':
        this.router.navigate(['/viajar']); // Redirige a la página 'viajar'
        break;
      default:
        break;
    }
  }
  

  async salir() {
    const alert = await this.alertController.create({
      header: ` ${this.nombreUsuario}`,
      message: '¿Estás seguro de que deseas salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // El usuario ha cancelado la acción
          }
        }, {
          text: 'Salir',
          handler: () => {
            localStorage.removeItem('ingresado');
            localStorage.removeItem('nombreUsuario');
            this.navCtrl.navigateRoot('/login'); // Navegar de nuevo al inicio de sesión
          }
        }
      ]
    });

    await alert.present();
  }
}
