import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register-admin-user',
  templateUrl: './register-admin-user.component.html',
  styleUrls: ['./register-admin-user.component.css']
})
export class RegisterAdminUserComponent {
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN','SPECIALIST','CLIENT'];
  defaultRole:string='ADMIN';
  isLoading: boolean = false;

  constructor(private userService: UserService,private router: Router) { }

  register(F:NgForm) {
    this.isLoading = true;
    this.registerRequest.firstname=F.controls['firstname'].value;
    this.registerRequest.lastname=F.controls['lastname'].value;
    this.registerRequest.password=F.controls['password'].value;
    this.registerRequest.email=F.controls['email'].value;
    this.registerRequest.role = this.defaultRole;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
        this.router.navigate(['user/send-code']);
        this.isLoading = false;
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        this.isLoading = false;
      }
    );
  }
}
