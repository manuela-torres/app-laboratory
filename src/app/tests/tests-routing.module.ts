import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout/layout.component';
import { TestListComponent } from './test-list/test-list.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';

const routes: Routes = [
  {path:'', component:LayoutComponent},

    //{path:'test-list', component: TestListComponent},
    {path:'create-test', component: CreateTestComponent},
    {path:'delete-test', component: DeleteTestComponent},
    {path:'edittest/:id', component: EditTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
