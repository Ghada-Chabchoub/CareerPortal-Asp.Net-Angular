import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { User } from '../models/user.model';
import { UserRoleResponse } from '../models/account-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private apiUrl = 'https://localhost:44322/api';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/Account/Login`, user); 
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/Account/Register`, registerModel); 
  }

  getUserRole(email: string): Observable<UserRoleResponse> {
    return this.http.get<UserRoleResponse>(`${this.apiUrl}/Account/GetUserRole?email=${email}`);
  }

}
