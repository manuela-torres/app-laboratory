import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Test } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent {

  displayedColumns: string[] = ['id', 'name', 'description','option'];

  public tests: Test[];
  public pathEdith = '/test/edittest/'
  public pathDelete = '/test/delete-test/'

  constructor(private testsService: TestsService, private testService1: TestsService,
    private dialog: MatDialog,  private activetedRoute: ActivatedRoute){}

  ngOnInit():void{
    this.getListTest1();
  }

  getListTest1(){

    this.testsService.getListTest().subscribe(response =>{
      this.tests= response;
        //En el response obtengo todo lo que viene del postman, el areglo en json


      //this.tests= this.tests.map((test, i) =>({counter: i+1, ...test}));

    })
  }






}
