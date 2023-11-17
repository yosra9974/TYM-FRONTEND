import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Specialist } from 'src/app/models/Specialist';
import { Booking } from 'src/app/models/Booking';
import { Client } from 'src/app/models/Client';
import { BookingService } from 'src/app/services/Booking.service';
import { SpecialistService } from 'src/app/services/Specialist.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  @Input() selectedDate: any;
  selectedFile!: File;
  idSpecialist = this.route.snapshot.paramMap.get('id');
  specialist: Specialist = new Specialist();
  booking: Booking = new Booking();
  clients: Client[] = [];
  successMessage: string = '';
  constructor(private router: Router,
    private bookingService: BookingService, 
    private specialistService: SpecialistService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.specialistService.getById(+id)
      .subscribe(specialist => {
        this.specialist = specialist;
      });
  }

  reload() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/Client/add', id]);
  }

  redirectToProfile() {
    console.log("ok");
    this.router.navigate(['/profile']);
  }
  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }

  assignSpecialistToBooking() {
    let email = localStorage.getItem("emailUser");
    if (email != null) {
      this.booking.Book = this.selectedDate;
      this.bookingService.addRDVAndAssignSPCAndCLIENT(this.booking, email, this.idSpecialist).subscribe(
        (booking) => {
          console.log(booking);
        }
      );
    }

  }
  
  onSubmit() {
    console.log(this.selectedDate);
    this.assignSpecialistToBooking();
    this.router.navigateByUrl('/Client/success');
  }
}
