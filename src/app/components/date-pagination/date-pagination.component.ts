import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-date-pagination',
  templateUrl: './date-pagination.component.html',
  styleUrls: ['./date-pagination.component.css'],
})
export class DatePaginationComponent {
  @Input() nextMonth!: (args?: any) => void;
  @Input() prevMonth!: (args?: any) => void;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
