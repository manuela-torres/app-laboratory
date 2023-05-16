import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DeleteAffiliateComponent } from '../affiliates/delete-affiliate/delete-affiliate.component';
import { DelateAppointmentComponent } from './delate-appointment/delate-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { HomeComponent } from '../affiliates/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

    //{path:'appointments-list', component: AppointmentsListComponent},
    {path:'create-appointment', component: CreateAppointmentComponent},
    {path:'delete-appointment/:id', component: DelateAppointmentComponent},
    {path:'editappointment/:id', component: EditAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
