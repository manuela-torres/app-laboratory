import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestListComponent } from './test-list/test-list.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestListComponent,
    CreateTestComponent,
    DeleteTestComponent,
    EditTestComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class TestsModule { }
