import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup ;
  username: string = '';
  password: string = '';

  constructor(private fb:FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({

    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      // Procesa el inicio de sesión
      const loginSuccess = this.authService.login(this.username, this.password);
    }
  }


}
