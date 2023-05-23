import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-delete-affiliate',
  templateUrl: './delete-affiliate.component.html',
  styleUrls: ['./delete-affiliate.component.css']
})


export class DeleteAffiliateComponent {

  public affiliateId: number;
  public affiliateName:string;
  public affiliateAge :string;
  public affiliateMail: string;


    constructor(private affiliateService: AffiliatesService,
    private dialog: MatDialog,
    private activetedRoute: ActivatedRoute,
    private router:Router){}



    ngOnInit():void{

       this.activetedRoute.params.
      pipe(
        switchMap(({id}) => this.affiliateService.getAffiliateById(id) ),

      )
      .subscribe(affiliate =>{

        let arrayAffiliate = Object.values(affiliate)
        this.affiliateId=(arrayAffiliate[0])
        this.affiliateName= (arrayAffiliate[1])
        this.affiliateAge= (arrayAffiliate[2])
        this.affiliateMail= (arrayAffiliate[3])

        console.log(arrayAffiliate)
        console.log(this.affiliateAge)
        return;
      })
    }

    openDialogDelete():void{

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {

      });

      dialogRef.afterClosed().subscribe(result => {
        if(!result) return;

        this.affiliateService.deleteAffiliateById(this.affiliateId).subscribe(wasDeleted =>{
          if (wasDeleted)
          this.router.navigate(['/affiliates'])

          const dialogRef1 = this.dialog.open(SuccessDialogComponent, {

          });

          return
        });

      });

    }



}
