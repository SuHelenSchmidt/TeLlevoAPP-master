import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group(
      {
        nombre: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmacionPassword: new FormControl('', Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {}

  async guardar() {
    const f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que completar todos los datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    const usuarioExistente = localStorage.getItem('usuario');
    if (usuarioExistente) {
      const usuarioGuardado = JSON.parse(usuarioExistente);
      if (usuarioGuardado.nombre === f.nombre) {
        const alert = await this.alertController.create({
          header: 'Usuario no disponible',
          message: 'El nombre de usuario ya está en uso',
        });

        await alert.present();
        return;
      }
    }

    const usuario = {
      nombre: f.nombre,
      password: f.password,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    localStorage.setItem('nombreUsuario', f.nombre);

    const registroCorrectoAlert = await this.alertController.create({
      message: 'Tu registro ha sido exitoso.',
    });

    await registroCorrectoAlert.present();

    // Cerrar la alerta automáticamente después de 1 segundo
    setTimeout(() => {
      registroCorrectoAlert.dismiss();
      this.navCtrl.navigateRoot('menu/inicio');
    }, 1000);
  }

  // Función para cancelar el registro y volver al inicio de sesión (login)
  cancelar() {
    this.navCtrl.navigateRoot('login');
  }

  // Función de validación personalizada para verificar que las contraseñas coincidan
  passwordMatchValidator(formGroup: FormGroup): null | { passwordMismatch: true } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmacionPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }
}
