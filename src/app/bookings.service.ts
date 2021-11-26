import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Booking } from './models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  getBooking(bookingCode: string, familyName: string): Observable<Booking> {
    const path = `/assets/mock_data/booking-${bookingCode}-${familyName}.json`;
    return this.http.get<Booking>(path).pipe(delay(500))
  }
}
