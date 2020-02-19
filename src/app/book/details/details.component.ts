import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BookService } from '../book.service';
import { Book } from 'src/app/shared/book.model';
import { AuthService } from 'src/app/user/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  get isLogged() { return this.authService.isLogged; }
  id: string;
  sbook: Observable<Book>;

  get books() {
    return this.bookService.getBooks;
  }

  constructor(private authService: AuthService, private bookService: BookService, private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.sbook = this.bookService.selectBook(this.id).pipe(
      shareReplay(1)
    );
  }

  deleteBook(id: string) {
    this.bookService.deleteItem(id);
    this.router.navigate(['']);
  }
}
