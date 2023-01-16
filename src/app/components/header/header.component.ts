import { Component } from '@angular/core';
import {
  faBars,
  faSearch,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faBars = faBars;
  faSearch = faSearch;
  isSearchOpen = false;
  faArrowLeft = faArrowLeft;
  query = '';

  toggleSearchBar() {
    this.isSearchOpen = !this.isSearchOpen;
  }
  getSeashQuery() {
    console.log(this.query);
  }
}
