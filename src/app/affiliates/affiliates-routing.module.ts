import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout/layout.component';
import { AffiliateListComponent } from './affiliate-list/affiliate-list.component';
import { CreateAffiliateComponent } from './create-affiliate/create-affiliate.component';
import { DeleteAffiliateComponent } from './delete-affiliate/delete-affiliate.component';
import { EditAffiliateComponent } from './edit-affiliate/edit-affiliate.component';

const routes: Routes = [
    {path:'', component:LayoutComponent},
    //{path:'affiliates-list', component: AffiliateListComponent},
    {path:'create-affiliate', component: CreateAffiliateComponent},
    {path:'delete-affiliate', component: DeleteAffiliateComponent},
    {path:'editaffiliate/:id', component: EditAffiliateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
