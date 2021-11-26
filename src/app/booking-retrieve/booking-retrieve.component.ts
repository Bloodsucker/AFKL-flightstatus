import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-retrieve',
  templateUrl: './booking-retrieve.component.html',
  styleUrls: ['./booking-retrieve.component.css']
})
export class BookingRetrieveComponent implements OnInit {

  bookingForm = new FormGroup({
    bookingCode: new FormControl(''),
    familyName: new FormControl(''),
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.bookingForm.valid) return;

    this.router.navigate(['/booking'], {
      queryParams: this.bookingForm.value
    });
  }
}
