import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Title}  from '@angular/platform-browser';
import { LoginForm } from './login.model';

//import para la navegacion
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isLoggedIn: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService,  private title: Title, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.isLoggedIn =  this.authService.isAuthenticated();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes realizar la lógica de autenticación
      const formData: LoginForm = this.loginForm.value as LoginForm;
      this.authService.validAuth(formData.username, formData.password)
      this.authService.login();
      this.router.navigate(['home']);
    }
  }

  ngOnInit(){
    this.title.setTitle('Login');
  }
}
