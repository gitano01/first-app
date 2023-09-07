import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginForm } from '../login/login-form.model';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  isLoggedIn : boolean = false; // Simulación de sesión activa

  constructor(private http: HttpClient){}

  validAuth(login:LoginForm ){
    if(login.username==='user' && login.password==='password'){
      alert('usuario correcto');
      console.log(login.username + " | " + login.password );
    //llamado al Post de spring security
      this.http.post("http://localhost:6565/Auth/login", login);

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
