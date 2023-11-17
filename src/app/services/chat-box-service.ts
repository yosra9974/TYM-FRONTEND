import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {

  constructor(private http: HttpClient) { }

  addChatBox(chatBox: any): Observable<any> {
    return this.http.post('/addChatBox', chatBox);
  }

  retrieveBoite(token: string, id2: number): Observable<any> {
    return this.http.get(`/retrieveBoite/user/${token}/chat/${id2}`);
  }
}
