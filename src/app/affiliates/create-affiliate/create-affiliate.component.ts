import { Component, OnInit } from '@angular/core';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { AffiliateListComponent } from '../affiliate-list/affiliate-list.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css']
})
export class CreateAffiliateComponent {

public affiliateForm = new FormGroup({
  idAffiliate: new FormControl <number>(100),
  name: new FormControl('',{nonNullable:true}),
  age: new FormControl<number>(0),
  mail: new FormControl(''),
});

  constructor(private affiliatesServicePost: AffiliatesService, private router:Router,
    public dialog: MatDialog){}

  get currentAffiliate(): Affiliate{
    const affiliate = this.affiliateForm.value as Affiliate;
    return affiliate;

  }

  createAffiliate (){
    this.affiliatesServicePost.createAffiliate(this.currentAffiliate).subscribe(dato =>{
      console.log(dato);})
  }


  onSubmit():void{

    if(this.affiliateForm.invalid) return;
    this.createAffiliate();
  }

  openDialog():void{
    const dialogRef=this.dialog.open(SuccessDialogComponent,{
      width:'230px',

    });
    dialogRef.afterClosed().subscribe(respuesta=>{
      console.log(respuesta)
    })
  }



  }




