import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePaginationComponent } from './date-pagination.component';

describe('DatePaginationComponent', () => {
  let component: DatePaginationComponent;
  let fixture: ComponentFixture<DatePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
