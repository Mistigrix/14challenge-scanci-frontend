import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AuthResponse, LoginRequest, RegisterRequest } from '../models';
import { Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl = environment.apiUrl +'/auth';
  constructor(private http: HttpClient, private router :Router){}

  register(request : RegisterRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrl+'/register', request).pipe(
      tap(response => this.saveToken(response))
    );
  }


  login(request :LoginRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrl+'/login', request).pipe(
      tap(response => this.saveToken(response))
    )
  }

   logout(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');

    this.router.navigate(['/login']);
  }


  private saveToken(response : AuthResponse):void {
    localStorage.setItem('token',response.token);
    localStorage.setItem('user_name', response.name);
    localStorage.setItem('user_email', response.email);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  getUserName(): string | null{
    return localStorage.getItem('user_name');
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
