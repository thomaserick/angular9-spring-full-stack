import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from '../auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;
  signUp: boolean;
  msgSuccess: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  onSubmit() {
    this.authService.Logar(this.username, this.password).subscribe(
      (response) => {
        this.storageService.setAcessToken(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errors = ['Usuário e senha incorretos.'];
      }
    );
  }

  signUpUser(event) {
    //Evita o evento de click fazer refrash
    event.preventDefault();
    this.msgSuccess = null;
    this.errors = [];
    this.signUp = true;
  }

  cancelSignUp() {
    this.msgSuccess = null;
    this.errors = [];
    this.signUp = false;
  }

  insert() {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    this.authService.insert(user).subscribe(
      (response) => {
        this.msgSuccess = 'Cadastro realizado com sucesso! Efetue o login.';
        this.signUp = false;
        this.errors = [];
        this.clearUser();
      },
      (errors) => {
        this.errors = errors.error.errors;
        console.log(errors);
        this.msgSuccess = null;
        this.clearUser();
      }
    );
  }

  clearUser() {
    this.username = '';
    this.password = '';
  }
}
