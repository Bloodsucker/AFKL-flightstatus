import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRetrieveComponent } from './booking-retrieve.component';

describe('BookingRetrieveComponent', () => {
  let component: BookingRetrieveComponent;
  let fixture: ComponentFixture<BookingRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
