import { Component } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';


@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent {

  displayedColumns: string[] = ['id', 'name', 'description','option'];

  public tests: Test[];
  public prueba: Test[];
  public pathEdith = '/test/edittest/'

  constructor(private testsService: TestsService, private testService1: TestsService,){}

  ngOnInit():void{
    this.getListTest1();
  }

  getListTest1(){
    //console.log("Consultando test...")
    this.testsService.getListTest().subscribe(response =>{
      this.tests= response;
      //console.log(response);

      //En el response obtengo todo lo que viene del postman, el areglo en json


      //this.tests= this.tests.map((test, i) =>({counter: i+1, ...test}));

    })
  }

  getTestById(idTest: number){
    this.testService1.getTestById(idTest).subscribe(response=>
      {this.prueba=response;
        console.log(response);
      }
      )
  }

  selectTest(idTest:number){
    this.getTestById(idTest)

  }

}
