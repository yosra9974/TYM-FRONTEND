import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent {
  selectedDate: Date | undefined;
  @Input() calendar: any[] = [];
  @Output() dateClicked = new EventEmitter<Date>();
  showBookingForm: boolean = false;
  selectedTimeSlotId: number = 0;

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('fullCalendar') fullCalendar!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'timeGridDay,dayGridWeek,dayGridMonth,list',
    },
    events: (fetchInfo, successCallback, failureCallback) => {
      const events = this.calendar.map((calendarEvent) => ({
        id: calendarEvent.id,
        title: calendarEvent.eventType,
        start: calendarEvent.dateDebut,
        end: calendarEvent.dateFin,
        backgroundColor: this.getEventBackgroundColor(calendarEvent.eventType),
      }));
      successCallback(events);
    },
    eventColor: '#378006',
    eventClick: this.handleEventClick.bind(this),
    selectable: false,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this),

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

  getEventBackgroundColor(eventType: string): string {
    if (eventType === 'event') {
      return '#008080'; // Set the background color for 'event' type events
    } else if (eventType === 'day-off') {
      return 'red'; // Set the background color for 'day-off' type events
     } else if (eventType === 'Book') {
  return '#36f4ee'; // Default background color
}else {
      return '#000000'; // Default background color
    }
  }

  goToPrevMonth() {
    this.fullCalendar.getApi().prev();
  }

  goToNextMonth() {
    this.fullCalendar.getApi().next();
  }

  getEventCssClass(eventType: string): string {
    if (eventType === 'event') {
      return 'event';
    } else if (eventType === 'day-off') {
      return 'day-off';
    }  else if (eventType === 'Book') {
      return 'Book';}
    else {
      return '';
    }
  }

  isTimeSlotAvailable(start: string, end: string): boolean {
    let a = new Date(start)
    let b = new Date(end)
    for (let cal of this.calendar) {
      if(cal.eventType =="day-off")
      if ((new Date(start) >= cal.dateDebut && start < cal.dateFin) || (end > cal.dateDebut && end <= cal.dateFin)) {
        return false;
      }
    }
    return true;
  }

  handleEventClick(info: any) {
    let event = info.event;
    console.log(event)
    if (event.extendedProps.className === 'available-slot') {
      this.selectedTimeSlotId = 1;
      this.showBookingForm = true;

    } else {
      alert('This time slot is not available for booking.');
    }
  }

  handleDateClick(arg: any) {
    this.selectedDate = arg.date;
    console.log('Date clicked:', this.selectedDate);
    this.selectedTimeSlotId = 1;
      this.showBookingForm = true;
  }

  handleBooking(event: any) {
    console.log('Booking form data:', event);
    this.selectedTimeSlotId = 0;
  }
}
