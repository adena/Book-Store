import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required, Validators.minLength(3)],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
