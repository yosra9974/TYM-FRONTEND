import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecialistService } from '../services/Specialist.service';
import { connect } from 'rxjs';
import { Specialist } from '../models/Specialist';
import { CalendarService } from '../services/calendar.service';
import { Calendar } from '../models/calendar';
//import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @Input() showForm: boolean = false;
  @Output() bookTimeSlot = new EventEmitter<any>();
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();

  bookingForm: FormGroup = this.formBuilder.group({
    EventName: ['', Validators.required],
    type: ['', Validators.required],
    eventTitle: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: SpecialistService,
    private calendarService: CalendarService
  ) { }

  userConnected: Specialist = new Specialist;
  ngOnInit() {
    console.log(this.startDate.toString().slice(0, 19) + 'Z');
    console.log(this.endDate.toString().slice(0, 19) + 'Z');

    this.setuserConnected();
    this.bookingForm.get('type')?.valueChanges.subscribe(type => {
      if (type === 'event') {
        this.bookingForm.get('eventTitle')?.setValidators([Validators.required]);
      } else {
        this.bookingForm.get('eventTitle')?.clearValidators();
      }
      this.bookingForm.get('eventTitle')?.updateValueAndValidity();
    });
  }

  submitForm() {
    if (this.bookingForm.valid) {
      let formData = this.bookingForm.value;
      let calender = new Calendar();
      let formattedStartDate = this.startDate.toString().slice(0, 19);
      let formattedEndDate = this.endDate.toString().slice(0, 19);
      console.log(formattedEndDate)
      calender.dateDebut = formattedStartDate;
      calender.dateFin = formattedEndDate;
      calender.eventType = formData.type;
      calender.eventName = formData.eventTitle;
      calender.user_id = this.userConnected.id;
      console.log(calender)
      this.calendarService.addCalendarEvent(calender, this.userConnected.id).subscribe(
        (response) => {
          console.log('Event added:', response);
          location.reload();
        },
        (error) => {
          console.error('Error adding event:', error);
          location.reload();
        }
      );
    }
  }
  async setuserConnected() {
    var emailUserConn = localStorage.getItem("emailUser");
    if (emailUserConn) {
      const userConnected = await this.userService.getUserByEmail(emailUserConn).toPromise();
      this.userConnected = userConnected as Specialist;
    }
  }
}
