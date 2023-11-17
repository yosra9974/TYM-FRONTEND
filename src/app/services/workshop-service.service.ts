import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Workshop } from '../models/Workshop';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class WorkshopServiceService {

  private URL = 'http://localhost:8075/workshop';



  constructor(private http: HttpClient , private cookieService: CookieService) { }
    getWorkshops(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(`${this.URL}/showall-workshops`);
  }
 
  updateWorkshop(workshop: Workshop): Observable<Workshop> {
    const url = `${this.URL}/${workshop.id}`;
    return this.http.put<Workshop>(this.URL, workshop);
  }
  deleteWorkshop(id: number): Observable<any> {
    console.log("idddd",id)
    return this.http.delete(`${this.URL}/delete-workshop/${id}`);
  }

  searchworkshops(address: string): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(`${this.URL}/search-by-address/${address}`);
  }

  sortWorkshops(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(`${this.URL}/sort`);
  }
  addWorkshopAndAssignCLIENT(workshop: Workshop, email: any, email_specialist:any): Observable<string> {
    
    const URL = `${this.URL}/addWorkshopAndAssignCLIENT/${email}/${email_specialist}`;
    return this.http.post<string>(URL, workshop);
  }
}
