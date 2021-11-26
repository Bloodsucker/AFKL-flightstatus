import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingRetrieveComponent } from './booking-retrieve/booking-retrieve.component';

const routes: Routes = [
  {path: '', component: BookingRetrieveComponent},
  {path: 'booking', component: BookingDetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
