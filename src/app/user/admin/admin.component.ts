import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
  }

  email: string;
  password: string;

  signUp() {
    this.authService.SignUp(this.loginForm.value.email, this.loginForm.value.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authService.SignOut();
  }

  onSubmit() {
  }
}
