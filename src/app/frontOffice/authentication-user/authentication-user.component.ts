import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";



interface User {
  roles: string[];
  jti: string;
  sub: string;
  iat: number;
  exp: number;
}

interface AuthenticationResponse {
  token: string;
}

@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent {
  email!: string;
  password!: string;
  role!: string;

  constructor(
    private userService: UserService,
    private router: Router) {}

  onSubmit() {

    const request = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      (response: AuthenticationResponse) => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);

        // Rediriger l'utilisateur en fonction de son rôle
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        const role = user.roles[0];
        console.log(user);
        localStorage.setItem('emailUser', user.jti);

        console.log(role);

        if (role === 'SPECIALIST') {

          this.router.navigate(['user/specialist']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['admin']);
        } else if (role === 'CLIENT') {
          this.router.navigate(['']);
        } 
        else {
          console.error('Unknown role:', role);
        }
      },
      error => {
        alert("Please check your account, password, or email.")
        console.error(error);
      }
    );
  }


  redirectToForgot() {
    console.log("ok");
    this.router.navigate(['user/forgot-password']);
  }
}
