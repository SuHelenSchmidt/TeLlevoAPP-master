import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }
  
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
     
      buttons: [
        {
          text: 'Cancelar ',
          handler: () => {
            
          }
        }, {
          text: 'Salir',
          handler: () => {
            localStorage.removeItem('menu');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('nombreUsuario', f.nombre);

      this.navCtrl.navigateRoot('menu/inicio');
    } else {
      const alert = await this.alertController.create({
        message: 'Los datos que ingresaste son incorrectos.',
      });

      await alert.present();

      // Cerrar la alerta automáticamente después de 1 segundo
      setTimeout(() => {
        alert.dismiss();
      }, 1000);
    }
  }

  async Recuperar() {
  }
}
