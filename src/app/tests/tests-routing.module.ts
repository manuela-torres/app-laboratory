import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent } from './test-list/test-list.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { HomeComponent } from '../affiliates/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

    //{path:'test-list', component: TestListComponent},
    {path:'create-test', component: CreateTestComponent},
    {path:'delete-test/:id', component: DeleteTestComponent},
    {path:'edittest/:id', component: EditTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
