import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * The AuthService handles authentication-related operations.
 * It communicates with the backend API to perform login and signup actions.
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth';     // Base URL for authentication API

  constructor(private http: HttpClient) { }

  /**
   * Sends a login request to the server.
   *credentials= - The username and password provided by the user.
   * @returns Observable<any> - The response from the server.
   */

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  /**
   * Sends a signup request to the server
   * the user = The username and password provided by the user for registration
   * @returns Observable<any> - The response from the server.
   */
  
  signup(user: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }
}
