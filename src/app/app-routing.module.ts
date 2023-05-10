import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { AffiliateListComponent } from './affiliates/affiliate-list/affiliate-list.component';


const routes: Routes = [
  {path:'', redirectTo: 'layout-page', pathMatch:'full'},
  {path:'layout-page', component: LayoutComponent},
  {path:'affiliates', component: AffiliateListComponent},
  {path:'tests', component: TestListComponent},
  {path:'appointments', component: AppointmentsListComponent},



  {path:'tests', loadChildren: () => import ( './tests/tests.module').then(m => m.TestsModule)},
  {path:'affiliates', loadChildren: () => import ( './affiliates/affiliates.module').then(m => m.AffiliatesModule)},
  {path:'appointments', loadChildren: () => import ( './appointments/appointments.module').then(m => m.AppointmentsModule)},

  {path:'**', redirectTo: 'layout-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
