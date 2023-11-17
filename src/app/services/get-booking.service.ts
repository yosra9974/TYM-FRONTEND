import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBookingService {
  private apiUrl ='http://localhost:8075/api' ;
  private token = '';

  constructor(private http: HttpClient) { }

  getCalendarEvents(): Observable<any> {
    const url = `${this.apiUrl}?wstoken=${this.token}&wsfunction=core_calendar_get_calendar_events&moodlewsrestformat=json`;
    return this.http.post(url, null);
  }

  deleteCalendarEvent(eventId: number): Observable<any> {
    const url = `${this.apiUrl}?wstoken=${this.token}&wsfunction=core_calendar_delete_calendar_events&moodlewsrestformat=json`;
    const body = new URLSearchParams();
    body.set('events[0][eventid]', eventId.toString());
    body.set('events[0][repeat]', '0'); // Set the repeat parameter value to '0'
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, body.toString(), { headers });
  }

}
