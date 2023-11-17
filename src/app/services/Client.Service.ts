import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';



@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'http://localhost:8075/Clients/getAllClients'; // Replace with your backend API URL
  private baseUrl1 = 'http://localhost:8075/Clients'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  
  clients: Client[] = [];
  

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

 
  getClientByEmail(email: string): Observable<Client> {
    const url = `${this.baseUrl1}/email/${email}`;
    return this.http.get<Client>(url);
  }
  
 
}
