import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  isLoading: boolean = false;
  massageerror: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  } , { validators :[this.confirmpassword]} as FormControlOptions);

  handleForm(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthService.setregister(this.registerForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.message == 'success') {
            this._Router.navigate(['/login']);
          }
        },

        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err.error.message);
          this.massageerror = err.error.message;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
   confirmpassword( group:FormGroup):void
   {
    let password=group.get('password');
    let rePassword=group.get('rePassword');


    // if(rePassword?.value==null){
    //   rePassword?.getError({required:true});
    // }

    if ( password?.value != rePassword?.value){
    rePassword?.setErrors({missmatch:true})
    }

   }
}
