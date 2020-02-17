import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  @Output() selectBook: EventEmitter<Book> = new EventEmitter();

  ngOnInit() {
    this.books$ = this.bookService.getBooks().pipe(
      shareReplay(1)
    );
  }

  selectBookHandler(book: Book) {
    //this.selectBook.emit(book);
    this.bookService.selectBook(book);
    console.log(book);
  }
}
