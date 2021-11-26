import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { BookingsService } from '../bookings.service';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  booking$?: Observable<Booking>;
  isBookingUnknown = new BehaviorSubject<boolean>(false);

  constructor(
    private bookingsService: BookingsService, 
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const bookingCode = this.route.snapshot.queryParamMap.get('bookingCode');
    const familyName = this.route.snapshot.queryParamMap.get('familyName');

    if(!bookingCode || !familyName) {
      this.isBookingUnknown.next(true);
      return;
    }

    this.booking$ = this.bookingsService.getBooking(bookingCode, familyName)
      .pipe(catchError(() => {
        this.isBookingUnknown.next(true);
        return of();
      }));
  }

}
