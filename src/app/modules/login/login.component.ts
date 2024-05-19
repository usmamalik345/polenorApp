import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MockServiceService } from 'src/app/services/mock-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private httpSerive: HttpService ,private loginService: MockServiceService ,private router: Router) { }

  // onLogin() {
  //   this.httpSerive.login(this.email, this.password)
  //     .then(response => {
  //       console.log('Login successful:', response);
  //       // Handle successful login (e.g., store JWT, navigate to another page)
  //     })
  //     .catch(error => {
  //       console.error('Login failed:', error);
  //       // Handle login error (e.g., show error message to the user)
  //       this.errorMessage = 'Login failed. Please check your credentials.';

  //     });
  // }
  
  login() {
    this.loginService.login(this.email, this.password)
      .then(response => {
        // Handle successful login
        console.log('Login Successful:', response);
        // Do something with the response, e.g., store the token, navigate to a different page, etc.
        this.router.navigate(['/accuei']);
      })
      .catch(error => {
        // Handle login error
        console.error('Login Error:', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      });
  }
}
