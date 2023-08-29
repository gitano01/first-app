import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='first-app'
  isLoggedIn : boolean;
  constructor(private authService: AuthService){
    this.isLoggedIn = this.authService.isAuthenticated();

  }
}
