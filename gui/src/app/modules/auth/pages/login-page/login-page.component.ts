import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedFormControls } from '../../../../app.types';
import { LoginRequestType } from '../../auth.types';
import { ToastService } from '../../../shared/services/toast.service';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  public loginForm = new FormGroup<TypedFormControls<LoginRequestType>>({
    identifier: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  public onSubmit() {
    console.log();
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: res => console.log(res),
        error: (err: HttpErrorResponse) => {
          const { error } = err;
          this.toastService.error(error.error.message);
        },
      });
    }
  }
}
