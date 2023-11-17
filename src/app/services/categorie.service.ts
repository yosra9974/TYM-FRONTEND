import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Assignmenent } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private URL = 'http://localhost:8075/Assignments'
  constructor(private http: HttpClient) { }

  ajouterAssignments(A:Assignmenent){
    return this.http.post<Assignmenent>(`${this.URL}/addAssignments`, A);
  }
  afficherAssignments(){
    return this.http.get<[Assignmenent]>(`${this.URL}/GetAll`);
  }

  addCategoryWithSubCategories(A:Assignmenent) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Assignmenent>(`${this.URL}`, A, { headers });
  }
}
