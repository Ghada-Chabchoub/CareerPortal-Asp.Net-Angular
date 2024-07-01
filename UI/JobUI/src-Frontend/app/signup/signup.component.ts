import { Component, OnDestroy } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  registerModel: RegisterModel = { Id: 0, firstName: '', lastName: '', Email: '', Password: '', ConfirmPassword: '', Role: '' };

  private subscription: Subscription = new Subscription();

  constructor(private accountService: AccountService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.subscription.add(
      this.accountService.register(this.registerModel).subscribe(
        response => {
          console.log('Registration successful:', response);
          alert("Success");
        },
        error => {
          console.error('Registration failed:', error);
        }
      )
    );
  }
}
