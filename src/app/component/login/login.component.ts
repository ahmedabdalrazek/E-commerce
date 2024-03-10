import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  isLoading: boolean = false;
  massageerror: string = '';
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
  });

  handleForm(): void {
    if (this.loginform.valid) {
      this.isLoading = true;
      this._AuthService.setlogin(this.loginform.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.message == 'success') {
            localStorage.setItem('eToken', response.token);
            this._AuthService.userdata;
            this._Router.navigate(['/home']);
          }
        },

        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err.error.message);
          this.massageerror = err.error.message;
        },
      });
    }
     else{
      this.loginform.markAllAsTouched();
     }
  }
}
