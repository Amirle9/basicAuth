import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

/**
 * The SignupComponent handles the sign-up functionality for the app
 * It collects the username and password from the user and submits it to the AuthService.
 */

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';        // Stores the username entered by the user
  password: string = '';

  constructor(private authService: AuthService) { }

  /**
   * This method is called when the sign-up form is submitted.
   * It sends the username and password to the AuthService for registration.
   */

  onSubmit() {
    this.authService.signup({ username: this.username, password: this.password }).subscribe(response => {
      console.log('Signup successful', response);
    }, error => {
      console.error('Signup failed', error);
    });
  }
}
