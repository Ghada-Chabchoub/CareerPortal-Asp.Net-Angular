import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { UserRoleResponse } from '../models/account-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { Id:0,Email: '', Password: '' };

  constructor(private accountService: AccountService, private router: Router) { }

  onSubmit(): void {
    this.accountService.login(this.user).subscribe(
      response => {
        console.log('Login successful:', response);

        this.accountService.getUserRole(this.user.Email).subscribe(
          (response: UserRoleResponse) => {
            this.handleUserRoleResponse(response);
          },
          (error) => {
            console.error('Error fetching user role:', error);
          }
        );
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  private handleUserRoleResponse(response: UserRoleResponse): void {
    // Update your logic to handle the user role response
    const userRole = response.role;
    if (userRole === 'candidat') {
      // Redirect to candidat offers page
      this.router.navigate(['/candidat/offers']);
    } else if (userRole === 'recruter') {
      // Redirect to recruter offers page
      this.router.navigate(['/recruter/offers']);
    } else {
      console.warn('Unknown user role:', userRole);
    }
  }
}