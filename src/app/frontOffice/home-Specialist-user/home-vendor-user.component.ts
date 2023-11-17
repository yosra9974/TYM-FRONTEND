import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { WorkshopServiceService } from 'src/app/services/workshop-service.service';
import { Workshop } from 'src/app/models/Workshop';
import { Specialist } from 'src/app/models/Specialist';
import { SpecialistService } from 'src/app/services/Specialist.service';

@Component({
  selector: 'app-home-vendor-user',
  templateUrl: './home-vendor-user.component.html',
  styleUrls: ['./home-vendor-user.component.css']
})
export class HomeSpecialistUserComponent   {



  specialist: Specialist= new Specialist();
  to!: string;
  subject!: string;
  body!: string;
  isLoading: boolean = false;


  id = this.route.snapshot.paramMap.get('id');



  
  constructor( private router: Router,private route: ActivatedRoute ,private userService: SpecialistService , private emailService: UserService ,private workshopService: WorkshopServiceService) {

  
  }
  
  

  redirectToAddData() {
    console.log("ok");
    this.router.navigate(['Data/add']);
  }
  redirectToAddAssignments() {
    console.log("ok");
    this.router.navigate(['Assignments/add']);
  }
  redirectToAddCategorie() {
    console.log("ok");
    this.router.navigate(['categorie/add']);
  }
  redirectToManageWorkShop() {
    console.log("ok");
    this.router.navigate(['workshop/show']);
  }
 
  
  redirectToprofile(specialist:Specialist) {

    this.router.navigate(['user/profile']);
  }
  redirectToAgenda(specialist:Specialist) {

    this.router.navigate(['user/specialist-agenda']);
  } 
  

  sendMail() {
    this.isLoading = true;
    this.emailService.sendMail(this.to, this.subject, this.body).subscribe(
      () => {this.isLoading = false;
        alert('E-mail sent successfully');
        },
      error => {console.error(error);this.isLoading = false;}
    );
  }

}
