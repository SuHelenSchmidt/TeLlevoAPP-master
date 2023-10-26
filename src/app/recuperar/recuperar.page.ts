import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecuper: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRecuper = this.fb.group({
      'nombre': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async RecuperarCo(){
    if (this.formularioRecuper.valid) {
      const f = this.formularioRecuper.value;
      const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
      
      if (usuario.nombre === f.nombre) {
        const alert = await this.alertController.create({
          message: 'Contraseña enviada al correo',
       
        });

        await alert.present();

        // Cerrar el mensaje de alerta automáticamente después de 1 segundo
        setTimeout(() => {
          alert.dismiss().then(() => {
            // Redirigir al usuario al inicio de sesión después de cerrar el mensaje
            this.navCtrl.navigateRoot('login');
          });
        }, 1000);
      } else {
        const alert = await this.alertController.create({
          message: 'El nombre de usuario no existe',
        });

        await alert.present();

        // Cerrar el mensaje de alerta automáticamente después de 1 segundo
        setTimeout(() => {
          alert.dismiss();
        }, 1000);
      }
    } else {
      const alert = await this.alertController.create({
        message: 'Tienes que completar los datos solicitados',
        
      });

      await alert.present();
    }
  }

  cancelar() {
    this.navCtrl.navigateRoot('login');
  }
}
