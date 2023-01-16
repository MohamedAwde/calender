import { Component, ViewChild } from '@angular/core';
import {
  NgbCalendar,
  NgbDatepicker,
  NgbDatepickerI18n,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-datepicker',
  templateUrl: './basic-datepicker.component.html',
  styleUrls: ['./basic-datepicker.component.css'],
})
export class BasicDatepickerComponent {
  model!: NgbDateStruct;
  date!: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
