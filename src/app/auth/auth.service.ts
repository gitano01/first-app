import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  isLoggedIn : boolean = false; // Simulación de sesión activa


  validAuth(username: string, password:string ){
    if(username==='username' && password==='password'){
      alert('usuario correcto');
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  getSession(){
    return localStorage.getItem("session");
  }
  logout() {
    this.isLoggedIn = false;
    return localStorage.setItem("session", this.isLoggedIn.toString());
    //return this.isLoggedIn;
  }

  isAuthenticated(){
    return localStorage.getItem("session");
    //return this.isLoggedIn;
  }
}
