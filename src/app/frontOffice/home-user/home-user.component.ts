import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Specialist } from "../../models/Specialist";
import { SpecialistService } from "../../services/Specialist.service";
import { WebSocketServiceService } from 'src/app/services/web-socket-service.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  specialists!: Specialist[]
 
  specialist: Specialist = new Specialist();
  loadingSpecialists: boolean = false;
  errorLoadingSpecialists: boolean = false;
  notification!: string ;

  constructor(
    private router: Router,
    private specialistService: SpecialistService,
    private webSocketService: WebSocketServiceService
  ) {}

  ngOnInit() {
    this.specialistService.getAllSpecialists().subscribe((data: Specialist[]) => {
      console.log(data);
      this.specialists = data; // initialisation de la variable boutiques avec les données du service
    });
    this.webSocketService.getMessage().subscribe(message => {
      this.notification = message.messageContent; // Mise à jour de la variable notification avec le message de la notification
    });
  }
  getAllSpecialists(): void {
    this.specialistService.getAllSpecialists()
      .subscribe(specialists => this.specialists=this.specialists);
 
  }
  redirectToPortfolio(specialist:Specialist) {
    console.log("ok");

    this.router.navigate(['user/portfolio',specialist.id]);
  }
}