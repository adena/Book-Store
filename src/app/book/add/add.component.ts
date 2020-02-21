import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { countries } from 'src/app/shared/countries';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  addForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    imageLink: [null, Validators.required],
    year: [null, Validators.required],
    country: [null, Validators.required],
    price: [null, Validators.compose([Validators.required, Validators.min(0)])],
    description: [null, Validators.required],
    language: [null],
    link: null,
    pages: null,
  });

  decimalValue = this.addForm.value.price;
  additionalInfo = false;

  countries = countries;


  constructor(private fb: FormBuilder, private bookService: BookService,
    private router: Router, private authService: AuthService) {
    if (!this.authService.isLogged) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit() {

    this.bookService.addBook(this.addForm.value);

  }
}
