import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

/**
 * The LoginComponent handles the login functionality for the application
 * It collects the username and password from the user and submits it to the AuthService.
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  // Stores the username entered by the user
  password: string = '';  // Stores the password

  constructor(private authService: AuthService) { }

  /**
   * This method is called when the login form is submitted
   * It sends the username and password to the AuthService for authentication.
   */

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(response => {
      console.log('Login successful', response);
    }, error => {
      console.error('Login failed', error);
    });
  }
}
