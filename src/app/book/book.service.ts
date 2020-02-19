import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Book } from '../shared/book.model';
import { tap, map, filter, take, find } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksRef: AngularFireList<any>;
  selectedBookRef: AngularFireObject<Book>;
  selectedBook: Observable<any>;
  books: Observable<Book[]>;

  constructor(private db: AngularFireDatabase) {

    this.booksRef = this.db.list('/books');
  }

  getBooks() {
    this.books = this.booksRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          id: c.payload.key,
          title: c.payload.val().title,
          author: c.payload.val().author,
          imageLink: c.payload.val().imageLink,
          year: c.payload.val().year,
          country: c.payload.val().country,
          price: c.payload.val().price,
          description: c.payload.val().description,
          language: c.payload.val().language,
          link: c.payload.val().link,
          pages: c.payload.val().pages,
        } as Book))
      )
    );

    return this.books
  }

  createBook(book: Book) {
    return this.db.list('books').push({
      title: book.title,
      author: book.author,
      imageLink: book.imageLink,
      year: book.year,
      country: book.country,
      language: book.language,
      link: book.link,
      pages: book.pages,
      price: book.price,
      description: book.description
    });
  }

  addBook(book: Book) {
    this.booksRef.push(book);
  }
  updateBook(id: string, book: Book) {
    this.booksRef.update(id, book);
  }
  deleteItem(key: string) {
    this.booksRef.remove(key);
  }
  deleteEverything() {
    this.booksRef.remove();
  }



  selectBook(id: string) {
    this.selectedBookRef = this.db.object(`/books/${id}`);
    this.selectedBook = this.selectedBookRef.snapshotChanges().pipe(
      map(c => ({
        id: c.payload.key,
        title: c.payload.val().title,
        author: c.payload.val().author,
        imageLink: c.payload.val().imageLink,
        year: c.payload.val().year,
        country: c.payload.val().country,
        price: c.payload.val().price,
        description: c.payload.val().description,
        language: c.payload.val().language,
        link: c.payload.val().link,
        pages: c.payload.val().pages,
      } as Book))
    );

    return this.selectedBook;
  }
}



