import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { shareReplay, reduce, map, takeLast } from 'rxjs/operators';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/book/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  total: number;
  books$: Observable<Book[]>
  displayedColumns: string[] = ['title', 'sold', 'price'];

  get isLogged() { return this.authService.isLogged; }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private bookService: BookService
  ) {
    this.books$ = this.bookService.getBooks().pipe(
      shareReplay(1)
    );
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

  getTotalCost() {
    return this.books$.pipe(
      map(x => x.map(y => y.price * y.sold).reduce((acc, value) => acc + value, 0)));
  }

}
