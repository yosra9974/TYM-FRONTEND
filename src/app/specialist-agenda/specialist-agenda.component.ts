import { Component, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { BookingService } from 'src/app/services/Booking.service';
import { Booking } from 'src/app/models/Booking';
import { CalendarService } from '../services/calendar.service';
import { Calendar } from '../models/calendar';
import { Specialist } from '../models/Specialist';
import { SpecialistService } from '../services/Specialist.service';
import { CalendarOptions } from '@fullcalendar/core';
@Component({
  selector: 'app-specialist-agenda',
  templateUrl: './specialist-agenda.component.html',
  styleUrls: ['./specialist-agenda.component.css']
})
export class SpecialistAgendaComponent {

  showBookingForm: boolean = false;
  selectedTimeSlotId: number = 0;
  selectedStartDate!: Date;
  selectedEndDate!: Date;
  eventType: 'event' | 'day-off' = 'event';
  eventTitle: string = '';
  calendarTab: any = [];
  bookings: any = [];

  constructor(
    private userService: SpecialistService,
    private bookingService: BookingService,
    private calenderService: CalendarService
  ) { }

  ngOnInit() {
    this.setuserConnected();
    this.getCalendars();
    this.getBookings();
  }

  approveBooking(booking: number) {
    this.bookingService.approveBooking(booking);
    location.reload();
  }

  declineBooking(booking: number) {
    this.bookingService.denyBooking(booking);
    location.reload();
  }

  @ViewChild('fullCalendar') fullCalendar!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridDay',
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'timeGridDay,dayGridWeek,dayGridMonth,list',
    },
    events: [],
    eventClick: this.handleEventClick.bind(this),
    eventColor: '#008080',
    eventBackgroundColor: '#008080',
    selectable: true,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this),
    select: this.handleSlotSelect.bind(this),
    customButtons: {
      customPrev: {
        text: 'Prev',
        click: () => {
          this.goToPrevMonth();
        },
      },
      customNext: {
        text: 'Next',
        click: () => {
          this.goToNextMonth();
        },
      },
    },
    validRange: {
      start: new Date().toISOString(),
      end: new Date(new Date().setMonth(new Date().getMonth() + 1)).toString(),
    },
  };

  goToPrevMonth() {
    this.fullCalendar.getApi().prev();
  }

  goToNextMonth() {
    this.fullCalendar.getApi().next();
  }

  handleEventClick(info: any) {
    console.log("Event clicked", info);

    const event = info.event;
    if (event.available = true) {
      console.log("It's not an available slot");
      this.selectedTimeSlotId = 1;
      this.selectedStartDate = event.start;
      this.selectedEndDate = event.end;
      this.showBookingForm = false;
    } else {
      console.log("It's an available slot");
      this.showBookingForm = true;
    }
  }

  handleDateClick(arg: any) {
    this.showBookingForm = false;
  }

  handleSlotSelect(info: any) {
    console.log('Slot selected!');
    this.showBookingForm = true;
    let startDate = info.start;
    let endDate = info.end;
    let startStr = startDate.toISOString();
    let endStr = endDate.toISOString();
    this.selectedStartDate = startStr;
    this.selectedEndDate = endStr;
  }

  bookTimeSlot() {
    if (this.eventType === 'event') {
    } else {
    }
    this.showBookingForm = false;
  }
  handleBooking(event: any) {
    if (event.type === 'event') {
      this.eventTitle = event.eventTitle;
    } else {
    }
    this.showBookingForm = false;
  }

  getCalendars(): void {
    this.calenderService.getCalendarEvents().subscribe((calendars: Calendar[]) => {
      calendars.forEach((element: any) => {
        if (element.user.id == this.userConnected.id) {
          let event = new Calendar();
          event.id = element.id;
          event.dateDebut = element.dateDebut;
          event.dateFin = element.dateFin;
          event.eventName = element.eventName;
          event.eventType = element.eventType;
          this.calendarTab.push(event);
        }
      });
    });
  }

  getBookings(): void {
    this.bookingService.getAllBookings().subscribe((bookings: any) => {
      bookings.forEach((element: any) => {
        if (element.specialist.id == this.userConnected.id) {
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

  userConnected: Specialist = new Specialist;

  async setuserConnected() {

    var emailUserConn = localStorage.getItem("emailUser");
    if (emailUserConn) {
      const userConnected = await this.userService.getUserByEmail(emailUserConn).toPromise();
      this.userConnected = userConnected as Specialist;
    }
  }
}
