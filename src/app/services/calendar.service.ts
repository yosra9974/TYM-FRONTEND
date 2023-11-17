import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from '../models/calendar';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl: string = 'http://localhost:8075/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  getCalendarEvents(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(`${this.baseUrl}/getCalendarEvents`);
  }
  
  deleteCalendarEvent(eventId: number): any {
    console.log(`${this.baseUrl}/deleteCalendarEvent/${eventId}`)
    return this.http.get<any>(`${this.baseUrl}/deleteCalendarEvent/${eventId}`,{});
  }
  
  addCalendarEvent(event: Calendar, userId: number): Observable<Calendar> {
    console.log("thjiseven"+event.toString());
    return this.http.post<Calendar>(`${this.baseUrl}/addCalendarEvent/`+userId, event);
  }

  getCalendarEventsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getCalendarEvent/${userId}`);
  }
}
