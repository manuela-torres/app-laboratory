import { Component } from '@angular/core';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';


@Component({
  selector: 'app-affiliate-list',
  templateUrl: './affiliate-list.component.html',
  styleUrls: ['./affiliate-list.component.css']
})
export class AffiliateListComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'mail','option'];

  public affiliates: Affiliate[];
  public pathEdith = '/affiliates/editaffiliate/'
  public pathDelete = '/affiliates/delete-affiliate/'

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
