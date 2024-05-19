import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  constructor() { }

  login() {
    this.isAuthenticated = true;
    // You might want to save the authentication state in local storage or a cookie
    // localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    this.isAuthenticated = false;
    // localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    // return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
    return this.isAuthenticated;
  }
}
