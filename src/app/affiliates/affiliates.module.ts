import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { DeleteAffiliateComponent } from './delete-affiliate/delete-affiliate.component';
import { EditAffiliateComponent } from './edit-affiliate/edit-affiliate.component';
import { CreateAffiliateComponent } from './create-affiliate/create-affiliate.component';
import { AffiliateListComponent } from './affiliate-list/affiliate-list.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DeleteAffiliateComponent,
    CreateAffiliateComponent,
    AffiliateListComponent,
    EditAffiliateComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    MaterialModule
  ],

  exports: [
    DeleteAffiliateComponent,
    CreateAffiliateComponent,
    AffiliateListComponent,
    EditAffiliateComponent,
    HomeComponent,
  ],

})
export class AffiliatesModule { }
