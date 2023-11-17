import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { SpecialistService } from 'src/app/services/Specialist.service';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-ajouter-stock',
  templateUrl: './ajouter-stock.component.html',
  styleUrls: ['./ajouter-stock.component.css']
})
export class AjouterStockComponent implements OnInit {
  bookings!:Booking[]
  numberOfBookings!:number;

  constructor(private specialistService:SpecialistService , private R: Router) {
  }

  ngOnInit() {

  }

  specialistId: number =1 ; // Replace with the actual specialist ID

  
}






