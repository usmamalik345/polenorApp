import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor() { }
  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const mockUser = {
        email: 'test@example.com',
        password: 'password123',
        userTypeMessage: 'Customer',
        token: 'dummy-jwt-token'
      };

      if (email === mockUser.email && password === mockUser.password) {
        resolve({
          token: mockUser.token,
          message: 'Login Successful.',
          Role: mockUser.userTypeMessage
        });
      } else {
        reject({
          message: 'Invalid credentials'
        });
      }
    });
  }
}
