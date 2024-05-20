import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {
    const body = { email, password };
    return this.http.post(this.apiUrl, body).toPromise();
  }

  private apiUrl = 'https://your-backend-api.com/api';  // Replace with your API URL

  // POST method
  post<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions());
  }

  // GET method
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions());
  }

  // PUT method
  put<T>(endpoint: string, data: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions());
  }

  // DELETE method
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions());
  }

  // Helper method for HTTP options
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

}
