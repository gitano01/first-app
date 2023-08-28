import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInFlag: boolean = false;

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }

  login(username: string, password: string): boolean {
    // Aquí deberías realizar la lógica para verificar las credenciales.
    // Por ejemplo, podrías comparar con datos en memoria o realizar una llamada a un backend.
    // Si las credenciales son válidas, establece this.isLoggedInFlag en true y retorna true,
    // de lo contrario, retorna false.

    if (username === 'usuario' && password === 'contrasena') {
      console.log('{ usuario: ' + username + ', password: ' + password + ' }');
      this.isLoggedInFlag = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedInFlag = false;
    // Aquí podrías realizar cualquier otro trabajo de limpieza necesario al cerrar la sesión.
  }
}
