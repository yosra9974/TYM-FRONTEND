import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking';
import { Specialist } from 'src/app/models/Specialist';
import { SpecialistService } from 'src/app/services/Specialist.service';

@Component({
  selector: 'app-profile-spacialist',
  templateUrl: './profile-spacialist.component.html',
  styleUrls: ['./profile-spacialist.component.css']
})
export class ProfileSpacialistComponent implements OnInit {

 

  constructor(private userService:SpecialistService ,
    private router :Router ,
    private route: ActivatedRoute,
    private http: HttpClient)  { }

    userConnected : Specialist = new Specialist;
    Bookings : Booking = new Booking;

    ngOnInit(): void {
      console.log
      this.setuserConnected();
    }
    async setuserConnected(){
      
      var emailUserConn = localStorage.getItem("emailUser");
      if (emailUserConn){
        const userConnected =  await this.userService.getUserByEmail(emailUserConn).toPromise();
        this.userConnected = userConnected as Specialist;
      }
    }
  }