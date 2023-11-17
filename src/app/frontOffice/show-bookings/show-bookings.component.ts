import { Component } from '@angular/core';
import { Booking } from '../../models/Booking';
import { BookingService } from '../../services/Booking.service';
import { ActivatedRoute } from '@angular/router';
import { Specialist } from 'src/app/models/Specialist';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css']
})
export class ShowBookingsComponent {
  bookings!: Booking [];
  isHovered = false; // Add the isHovered property here
  booking: Booking = new Booking();
  specialists!:Specialist[];
  clients!:Client[];
  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
  
   
    this.bookingService.getAllBookings().subscribe((data: Booking[]) => {
      console.log(data);
      this.bookings = data;
      
    });
    this.getAllBookings();
    
  }
  getAllBookings() {

      this.bookingService.getAllBookings().subscribe(response => {
        console.log(response);
        this.bookings = response;
      });
  }

 
}
