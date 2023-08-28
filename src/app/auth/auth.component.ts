import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}


  login() {
    const loginSuccess = this.authService.login(this.username, this.password);
    if (loginSuccess) {
      // Redirigir a la página después del inicio de sesión exitoso
      // Por ejemplo: this.router.navigateByUrl('/home');
    } else {
      // Mostrar mensaje de error o realizar alguna otra acción en caso de inicio de sesión fallido
    }
  }

  logout() {
    this.authService.logout();
    // Realizar acciones adicionales después de cerrar sesión si es necesario
  }
}




