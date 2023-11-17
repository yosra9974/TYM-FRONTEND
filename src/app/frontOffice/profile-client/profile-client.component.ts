import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking';
import { Client } from 'src/app/models/Client';
import { User } from 'src/app/models/User';
import { BookingService } from 'src/app/services/Booking.service';
import { ClientService } from 'src/app/services/Client.Service';
import { UserService } from 'src/app/services/user.service';
import {Specialist} from "../../models/Specialist";

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent  implements OnInit {
  constructor(
    private userService:ClientService ,
    private bookingService:BookingService,
    private router :Router ,
    )  { }

    bookings: any = [];



  ngOnInit(): void {

    this.setuserConnected();
    this.getBookings();

    /*  this.bookingService.getBookingsSpecialistsByClient(id).subscribe((data: Booking[]) => {
        console.log(data);
        this.workshops = data;
      });*/
  }






    userConnected : Client = new Client;




  async setuserConnected() {

    var emailUserConn = localStorage.getItem("emailUser");
    if (emailUserConn) {
      const userConnected = await this.userService.getClientByEmail(emailUserConn).toPromise();
      this.userConnected = userConnected as Client;
    }
  }
    getBookings(): void {
      this.bookingService.getAllBookings().subscribe((bookings: any) => {
        bookings.forEach((element: any) => {
          if (element.client.id == this.userConnected.id && element.approved == 1) {
            console.log(element)
            let booking = new Booking();
            booking.id = element.id;
            booking.Book = element.Book;
            booking.firstname = element.firstname;
            booking.Approved = element.approved;
            booking.lastname = element.lastname;
            booking.online = element.online;
            this.bookings.push(booking);
          }
        });
      });
    }

}
