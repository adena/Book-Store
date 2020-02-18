import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  get isLogged() { return this.authService.isLogged; }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
