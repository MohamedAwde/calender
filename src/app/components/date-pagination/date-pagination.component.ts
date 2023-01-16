import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-date-pagination',
  templateUrl: './date-pagination.component.html',
  styleUrls: ['./date-pagination.component.css'],
})
export class DatePaginationComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
