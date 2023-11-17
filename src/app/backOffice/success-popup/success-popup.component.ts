import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css']
})
export class SuccessPopupComponent  {
  constructor(

    private router: Router,
   
  ) {
  }

  reload() {
    console.log("ok");
    this.router.navigate(['/Client/profileClient']);
}
}