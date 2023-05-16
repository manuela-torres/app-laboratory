import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateListComponent } from './affiliate-list/affiliate-list.component';
import { CreateAffiliateComponent } from './create-affiliate/create-affiliate.component';
import { DeleteAffiliateComponent } from './delete-affiliate/delete-affiliate.component';
import { EditAffiliateComponent } from './edit-affiliate/edit-affiliate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    //{path:'affiliates-list', component: AffiliateListComponent},
    {path:'create-affiliate', component: CreateAffiliateComponent},
    {path:'delete-affiliate/:id', component: DeleteAffiliateComponent},
    {path:'editaffiliate/:id', component: EditAffiliateComponent},
    {path:'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
