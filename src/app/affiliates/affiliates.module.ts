import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { EditTestComponent } from './edit-test/edit-test.component';
import { DeleteAffiliateComponent } from './delete-affiliate/delete-affiliate.component';
import { EditAffiliateComponent } from './edit-affiliate/edit-affiliate.component';
import { CreateAffiliateComponent } from './create-affiliate/create-affiliate.component';
import { AffiliateListComponent } from './affiliate-list/affiliate-list.component';


@NgModule({
  declarations: [
    EditTestComponent,
    DeleteAffiliateComponent,
    EditAffiliateComponent,
    CreateAffiliateComponent,
    AffiliateListComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule
  ]
})
export class AffiliatesModule { }
