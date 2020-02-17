import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required, Validators.minLength(3)],
    rePassword: [null, Validators.required, Validators.minLength(3)],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
  }
}
