import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  @Input()
  bookings!: Booking[];
  @Output() approveBooking: EventEmitter<Booking> = new EventEmitter<Booking>();
  @Output() declineBooking: EventEmitter<Booking> = new EventEmitter<Booking>();
  
  approve(booking: Booking) {
    this.approveBooking.emit(booking);
  }
  
  decline(booking: Booking) {
    this.declineBooking.emit(booking);
  }
}
