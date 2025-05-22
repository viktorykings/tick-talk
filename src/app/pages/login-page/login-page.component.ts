import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      if (username && password) {
        this.authService.login({ username, password }).subscribe();

        console.log(this.form.value);
      }
    }
  }
  // onSubmit() {
  //   if (this.form.valid) {
  //     const { username, password } = this.form.value;
  //     if (username && password) {
  //       this.authService.login({ username, password }).subscribe({
  //         next: (res) => {
  //           console.log('Login success:', res);
  //           // возможно, сохранить токен или перенаправить
  //         },
  //         error: (err) => {
  //           console.error('Login failed:', err);
  //         },
  //       });
  //     }
  //   }
  // }
}
