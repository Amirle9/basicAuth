import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        // Navigate to the success page
        this.router.navigate(['/success']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
