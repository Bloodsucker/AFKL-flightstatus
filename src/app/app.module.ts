import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BookingRetrieveComponent } from './booking-retrieve/booking-retrieve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion'; 

@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    TopNavbarComponent,
    BookingRetrieveComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
