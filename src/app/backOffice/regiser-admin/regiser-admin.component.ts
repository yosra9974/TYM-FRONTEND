import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-regiser-admin',
  templateUrl: './regiser-admin.component.html',
  styleUrls: ['./regiser-admin.component.css']
})
export class RegiserAdminComponent {
  constructor(private router: Router) {
  }
 
  redirectToRegisterSpecialist() {
    console.log("ok");
    this.router.navigate(['admin/register-specialist']);
  }
  redirectToRegisterProvider() {
    console.log("ok");
    this.router.navigate(['admin/register-client']);
  }
 
  
}
