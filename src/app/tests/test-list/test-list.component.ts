import { Component } from '@angular/core';

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

  constructor(){}

  ngOnInit():void{}

}
