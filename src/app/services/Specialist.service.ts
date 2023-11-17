import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { Booking } from '../models/Booking';
import { Specialist } from '../models/Specialist';
import { Workshop } from '../models/Workshop';


@Injectable({
  providedIn: 'root',
})
export class SpecialistService {
  private baseUrl = 'http://localhost:8075/Specialists/getAllSpecialists'; // Replace with your backend API URL
  private baseUrl2 = 'http://localhost:8075/Specialists'
  private baseUrl4 = 'http://localhost:8075/DemandeCv'


  constructor(private http: HttpClient) {}

  
  specialists: Specialist[] = [];
  

  getAllSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(this.baseUrl);
  }
 
  uploadCv(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl4}/uploadCv`, formData);
  }
 
  getAllSpecialistTitles(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(this.baseUrl2);
  }

  
  getById(id: number): Observable<Specialist> {
    const url = `${this.baseUrl2}/getSpecialistsBy/${id}`;
    return this.http.get<Specialist>(url);
  
  }
  

  
 
  updateSpecialist(specialist: Specialist): Observable<Specialist> {
    const url = `${this.baseUrl2}/${specialist.id}`;
    return this.http.put<Specialist>(this.baseUrl2, specialist);
  }
  deleteSpecialist(id: number): Observable<any> {
    console.log("idddd",id)
    return this.http.delete(`${this.baseUrl2}/delete-Specialist/${id}`);
  }
  getUserByEmail(email: string): Observable<Specialist> {
    const url = `${this.baseUrl2}/email/${email}`;
    return this.http.get<Specialist>(url);
  }
  
 
}
