import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: Boolean;
  signUp: boolean;

  constructor(private router: Router) {}

  onSubmit() {
    console.log(`User:${this.username}, Pass: ${this.password}`);
    //Sucesso Tela Home
    this.router.navigate(['/home']);
    //Erro Msg de erro
  }

  signUpUser(event) {
    //Evita o evento de click fazer refrash
    event.preventDefault();
    this.signUp = true;
  }

  cancelSignUp() {
    this.signUp = false;
  }
}
