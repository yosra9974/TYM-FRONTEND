import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Client } from '../models/Client';
import { Booking } from '../models/Booking';
import { Specialist } from '../models/Specialist';
import { Workshop } from '../models/Workshop';


@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8075/bookings';
  private baseUrl1 = 'http://localhost:8075/bookings/getAllBookings';

  private isAuthenticated: boolean = false;


  public setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }



  constructor(private http: HttpClient) { }

  addWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>(`${this.baseUrl}/add-workshop`, workshop);
  }

  addClient(client: Client): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/add-client`, client);
  }

  addClientAndAssignToWorkshop(client: Client, idWorkshop: number): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/add-Client/${idWorkshop}`, client);
  }



  getBookingByWorkshopAndSpecialist(idWorkshop: number, specialist: Specialist): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/getBookingByWorkshopAndSpecialist/${idWorkshop}/${specialist}`);
  }


  getBookingsSpecialistsByClient(id: number): Observable<Booking> {
    const url = `${this.baseUrl}/getBookingsByClientId/${id}`;
    return this.http.get<Booking>(url);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/getAllClients`);
  }
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl1);
  }
  addRDVAndAssignSPCAndCLIENT(booking: Booking, emailClient: string, idSpecialist: any): Observable<string> {
    const url = `${this.baseUrl}/addRDVAndAssignCLIENT/${emailClient}/${idSpecialist}`;
    return this.http.post<string>(url, booking);
  }
  getNbrBookingSpecialist(idSpecialist: number): Observable<number> {
    const url = `${this.baseUrl}/getNbrBookingSpecialist/${idSpecialist}`;
    return this.http.get<number>(url);
  }

  retrieveBooking(): Observable<any> {
    const url = `${this.baseUrl}/retrieveBooking`;
    return this.http.get<any>(url);
  }
  retrieveavailableslots(idSpecialist: number): Observable<any> {
    const url = `${this.baseUrl}/getavailableBookings/${idSpecialist}`;
    return this.http.get<any>(url);
  }
  retrieveBookingBySpecialist(idSpecialist: number): Observable<any> {
    const url = `${this.baseUrl}/getBookingsBySpecialist/${idSpecialist}`;
    return this.http.get<any>(url);
  }
  bookTimeSlot(timeSlotId: number, bookingData: any): Observable<any> {
    const url = `${this.baseUrl}/time-slots/${timeSlotId}/book`;
    return this.http.post(url, bookingData);

  }
  private bookingForm = new BehaviorSubject<any>(null);

  getBookingForm() {
    return this.bookingForm.asObservable();
  }

  setBookingForm(data: any) {
    this.bookingForm.next(data);
  }

  // Function to approve a booking by its ID
  approveBooking(bookingId: number) {
    const url = `${this.baseUrl}/approve-booking/${bookingId}`;
    this.http.put(url, {}).subscribe(response => {
      console.log('Booking approved:', response);
    });
  }

  // Function to deny a booking by its ID
  denyBooking(bookingId: number) {
    const url = `${this.baseUrl}/deny-booking/${bookingId}`;
    this.http.put(url, {}).subscribe(response => {
      console.log('Booking denied:', response);
    });
  }

  //bookTimeSlot(timeSlotId: number, bookingData: any) {
  // Your booking logic here
  //  }

}
