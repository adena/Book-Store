import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BookService } from '../book.service';
import { Book } from 'src/app/shared/book.model';
import { AuthService } from 'src/app/user/auth.service';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'coral',
      })),
      state('state2', style({
        backgroundColor: 'pink',
      })),
      transition('*=>state1', animate('2500ms')),
      transition('*=>state2', animate('2500ms'))
    ])
  ]
})
export class DetailsComponent implements OnInit {
  get isLogged() { return this.authService.isLogged; }
  id: string;
  sbook: Observable<Book>;
  toState = 'state1';

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

    this.changeState('state1');
  }

  changeState(state: any) {
    this.toState = state;

    setTimeout(() => {
      if (state === 'state1') {
        this.changeState('state2');
      } else {
        this.changeState('state1')
      }
    }, 2500)
  }


  deleteBook(id: string) {
    this.bookService.deleteItem(id);
    this.router.navigate(['']);
  }
}
