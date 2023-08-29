import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  isLoggedIn = false; // Simulación de sesión activa

    async _saveSession  (){
      await localStorage.setItem("session","true");
    }



  validAuth( username: string, password:string ){
    if(username==='username' && password==='password'){
      alert('usuario correcto');
      this._saveSession();

      //console.log(this.getSession());

    }else{
      alert('No es el usuario correcto');
    }
  }

  getSession(){
    return localStorage.getItem("session");
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
