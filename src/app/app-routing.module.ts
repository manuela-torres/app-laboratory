import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent } from './tests/test-list/test-list.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { AffiliateListComponent } from './affiliates/affiliate-list/affiliate-list.component';
import { HomeComponent } from './affiliates/home/home.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'affiliates', component: AffiliateListComponent},
  {path:'test', component: TestListComponent},
  {path:'appointments', component: AppointmentsListComponent},



  {path:'test', loadChildren: () => import ( './tests/tests.module').then(m => m.TestsModule)},
  {path:'affiliates', loadChildren: () => import ( './affiliates/affiliates.module').then(m => m.AffiliatesModule)},
  {path:'appointments', loadChildren: () => import ( './appointments/appointments.module').then(m => m.AppointmentsModule)},

  {path:'**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
