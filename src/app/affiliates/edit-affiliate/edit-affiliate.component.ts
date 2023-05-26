import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-affiliate',
  templateUrl: './edit-affiliate.component.html',
  styleUrls: ['./edit-affiliate.component.css']
})
export class EditAffiliateComponent {

  public editAffiliateForm:FormGroup = this.fb.group({

    idAffiliate: [],
    name:['', Validators.required],
    age:['',  [Validators.required,Validators.min(0), Validators.max(130)]],
    mail:['', [Validators.required, Validators.email]],

  });

  constructor(private affiliatesService: AffiliatesService,
    public dialog: MatDialog,private fb: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private router:Router){}


    ngOnInit():void{

      this.activetedRoute.params.
      pipe(
        switchMap(({id}) => this.affiliatesService.getAffiliateById(id) ),

       )
      .subscribe(affiliate =>{


      let arrayAffiliate = Object.values(affiliate)

      this.editAffiliateForm.get('idAffiliate')?.setValue(arrayAffiliate[0])
      this.editAffiliateForm.get('name')?.setValue(arrayAffiliate[1])
      this.editAffiliateForm.get('age')?.setValue(arrayAffiliate[2])
      this.editAffiliateForm.get('mail')?.setValue(arrayAffiliate[3])


        return;
      })
    }


    updateTest (){
      this.affiliatesService.updateAffiliate(this.editAffiliateForm.value).subscribe(dato =>{
        return;})
    }

    onSubmit():void{
      if(this.editAffiliateForm.invalid) return;
      this.updateTest();

    }

    openDialog():void{
      const dialogRef=this.dialog.open(SuccessDialogComponent,{


      });
      dialogRef.afterClosed().subscribe(respuesta=>{

        this.router.navigate(['/affiliates'])
      })
    }

}
