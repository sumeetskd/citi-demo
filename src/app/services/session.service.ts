import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = 'http://localhost:3000/session';
  constructor(private http:HttpClient) { }

  createSession(sessionData: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, sessionData);
  }

 
}
