import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDatepicker,
  NgbDatepickerI18n,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-datepicker',
  templateUrl: './basic-datepicker.component.html',
  styleUrls: ['./basic-datepicker.component.css'],
  styles: [
    `
      .ngb-dp-month-name {
        background-color: red !important;
      }
    `,
  ],
})
export class BasicDatepickerComponent implements OnInit {
  @ViewChild(NgbDatepicker, { static: true }) datepicker!: NgbDatepicker;

  date!: NgbDateStruct;

  constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {}

  ngOnInit(): void {
    this.selectToday();
  }

  selectToday() {
    this.date = this.calendar.getToday();
    console.log(this.date);
  }

  nextMonth() {
    const { state, calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', 1));
  }

  prevMonth() {
    const { state, calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', -1));
  }

  onDateSelect(event: NgbDate) {
    console.log(event);
  }
}
