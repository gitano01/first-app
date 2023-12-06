import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginForm } from '../login/login-form.model';
import { Constantes } from '../utils/Constantes';

//import para la navegacion
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  isLoggedIn : boolean = false; // Simulación de sesión activa

  constructor(private http: HttpClient, private router: Router){}

  validAuth(login:LoginForm ){
    const url = Constantes.API_JWT_URL;

      console.log(login.username + " | " + login.password );
      const base64Credentials = btoa(login.username + ':' + login.password);
      const headers = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Basic ' +  base64Credentials
      });
    //llamado al Post de spring security
      this.http.post(url, login,{headers})
      .subscribe((response => {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        console.log("Respuesta del servidor ", response);

        if(this.isLoggedIn === true){
          this._saveSession();
          this.router.navigate(['home']);
        }else{
          this.router.navigate(['login']);
        }
      }));

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

  async _saveSession(){
    await localStorage.setItem("session","true");
  }
}
