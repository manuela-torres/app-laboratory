import { Component } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, },
  {position: 2, name: 'Helium', weight: 4.0026,  },
  {position: 3, name: 'Lithium', weight: 6.941,  },
  {position: 4, name: 'Beryllium', weight: 9.0122,  },

];

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {
  displayedColumns: string[] = ['id', 'name', 'description','option'];
  dataSource = ELEMENT_DATA;

  public tests: Test[];

  constructor(private testsService: TestsService){}

  ngOnInit():void{
    this.getListTest1();
  }

  getListTest1(){
    console.log("Consultando test...")
    this.testsService.getListTest().subscribe(response =>{
      console.log(response);
      this.tests= response;

      //En el response obtengo todo lo que viene del postman, el areglo en json


      this.tests= this.tests.map((test, i) =>({counter: i+1, ...test}));

    })
  }

}
