import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DelateAppointmentComponent } from './delate-appointment/delate-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';


@NgModule({
  declarations: [
    AppointmentsListComponent,
    CreateAppointmentComponent,
    DelateAppointmentComponent,
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
