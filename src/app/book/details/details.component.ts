import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BookService } from '../book.service';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },

        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },

      ];
    })
  );

  @Input() selectedBook2: Book;

  isRouteComponent = false;

  constructor(private breakpointObserver: BreakpointObserver, private bookService: BookService, private route: ActivatedRoute,
    private router: Router,
  ) { }

  get selectedBook() {
    return this.bookService.selectedBook;
  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.bookService.getBook('id');
    // if (this.isRouteComponent) {
    //   this.causesService
    //     .load(+this.activatedRoute.snapshot.params.id)
    //     .subscribe((cause: ICause) => {
    //       // if (!cause) {
    //       //   this.router.navigate([]);
    //       // }
    //       this.causesService.selectCause(cause);
    //     });
    // }
  }
}
