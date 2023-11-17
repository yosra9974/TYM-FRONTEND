import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent{
  constructor(private router: Router) {
  }
  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['user/register']);
  }
  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }
  redirectToHome2() {
    console.log("ok");
    this.router.navigate(['Home']);
  }
 

  redirectToRegisterClient() {
    console.log("ok");
    this.router.navigate(['user/register-client']);
  }
 
 
  redirectToSend() {
    console.log("ok");
    this.router.navigate(['user/send-mail']);
  }

  redirectToRegisterAdmin() {
    console.log("ok");
    this.router.navigate(['user/register-admin']);
  }
  redirectToVerifAccount() {
    console.log("ok");
    this.router.navigate(['user/send-code']);
  }
}
