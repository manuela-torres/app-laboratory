import { Component } from '@angular/core';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', },

];

@Component({
  selector: 'app-affiliate-list',
  templateUrl: './affiliate-list.component.html',
  styleUrls: ['./affiliate-list.component.css']
})
export class AffiliateListComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'mail','option'];
  dataSource = ELEMENT_DATA;

  public affiliates: Affiliate[];

  constructor(private affiliatesService: AffiliatesService){}

  ngOnInit():void{
    this.getListAffiliates();

  }

  getListAffiliates(){
    this.affiliatesService.getListAffiliates().subscribe(response =>
      {this.affiliates=response
      console.log(response);
      }
    )
  }

}
