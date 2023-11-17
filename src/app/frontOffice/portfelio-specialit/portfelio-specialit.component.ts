import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialistService } from 'src/app/services/Specialist.service';
import { Specialist } from 'src/app/models/Specialist';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-portfelio-specialit',
  templateUrl: './portfelio-specialit.component.html',
  styleUrls: ['./portfelio-specialit.component.css']
})
export class PortfelioSpecialitComponent implements OnInit {
  showAgenda: boolean = false;
  idSpecialist = this.route.snapshot.paramMap.get('id');
  specialist: Specialist = new Specialist();
  calendar: any[] = [];

  ngOnInit() {
    const idSpecialist = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.specialistservice.getById(+idSpecialist)
      .subscribe(specialist => {
        this.specialist = specialist;
      });

    this.calendarService.getCalendarEventsByUserId(Number(this.idSpecialist)).subscribe((e: any) => {
      this.calendar = e;
    });
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private specialistservice: SpecialistService,
    private calendarService: CalendarService
  ) { }

  redirectToAuthenticate() {
    this.router.navigate(['user/authenticate']);
  }
  redirectToAddBooking() {
    let email = localStorage.getItem("emailUser");
    if (email != null) {
      console.log("ok");
      const idSpecialist = this.route.snapshot.paramMap.get('id');
      this.showAgenda = true;
    } else {
      this.redirectToAuthenticate();
    }
  }

}



