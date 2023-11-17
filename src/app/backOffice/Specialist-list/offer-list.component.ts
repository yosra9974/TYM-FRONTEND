import {Component, OnInit} from '@angular/core';

import {ContractService} from "../../services/contract.service";
import { Specialist } from 'src/app/models/Specialist';
import { WebSocketServiceService } from 'src/app/services/web-socket-service.service';
import { SpecialistService } from 'src/app/services/Specialist.service';
import { Booking } from 'src/app/models/Booking';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/Booking.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  booking!: Booking[]

  specialist: Specialist = new Specialist();
  loadingSpecialists: boolean = false;
  errorLoadingSpecialists: boolean = false;
  successMessage!: string ;
  specialists: Specialist[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;
  role!:string;
  constructor(
    private router: Router,
    private specialistService: SpecialistService,
    private webSocketService: WebSocketServiceService ,
     ){}
    ngOnInit(): void {
      console.log("ngOnInit: getSpecialists()");
      this.getAllSpecialists();
    }
  
    onUserClick(id: number) {
      this.router.navigate(['/Client/add', id]);
    }
    GoToProfile() {
      this.router.navigate(['/Client/profileClient']);
    }
  
    getAllSpecialists() {
      const spec = encodeURIComponent(this.spec);
      const sort = encodeURIComponent(this.sort);
      console.log("getSpecialists: spec =", spec, "sort =", sort);
      this.specialistService.getAllSpecialists().subscribe(response => {
        console.log(response);
        this.specialists = response;
      });
    }
  
    onSpecChange() {
      this.sort = 'id,asc'; // réinitialisation du tri par défaut
      this.pageNumber = 0; // réinitialisation du numéro de page
      this.getAllSpecialists();
    }
  
    onSortChange(sort: string) {
      this.sort = sort;
      this.getAllSpecialists();
    }
  
    onPageChange(pageNumber: number) {
      this.pageNumber = pageNumber;
      this.getAllSpecialists();
    }
  
    get pages(): number[] {
      const pageCount = Math.ceil(this.specialists.length / this.pageSize);
      return Array.from(Array(pageCount), (_, i) => i);
    }
  
    get itemsToDisplay(): any[] {
      const startIndex = this.pageNumber * this.pageSize;
      return this.specialists.slice(startIndex, startIndex + this.pageSize);
    }
  
    onPageChange2(page: number): void {
      this.pageNumber = page;
    }
  }  
