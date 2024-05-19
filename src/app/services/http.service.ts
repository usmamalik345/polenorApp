import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:3000/api/v1/customers/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {
    const body = { email, password };
    return this.http.post(this.apiUrl, body).toPromise();
  }
  
}
