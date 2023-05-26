import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { TestsService } from 'src/app/services/tests.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { FailDialogComponent } from 'src/app/shared/fail-dialog/fail-dialog.component';

import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})


export class DeleteTestComponent {

  public testId: number;
  public testName:string;
  public testDescription:string;


  constructor(private testsService: TestsService,
    private dialog: MatDialog,  private activetedRoute: ActivatedRoute, private router:Router){}


    ngOnInit():void{

      this.activetedRoute.params.
      pipe(
        switchMap(({id}) => this.testsService.getTestById(id) ),

      )
      .subscribe(test =>{

        if(!test) return this.router.navigate(['/test'])

        let arrayTest = Object.values(test)
        this.testId=(arrayTest[0])
        this.testName= (arrayTest[1])
        this.testDescription= (arrayTest[2])
        return;
      })

    }




    openDialogDelete():void{

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {

      });

      dialogRef.afterClosed().subscribe(result => {
        if(!result) return;

        this.testsService.deleteTestById(this.testId).subscribe(wasDeleted =>{
          if (wasDeleted){
            const dialogRef1 = this.dialog.open(SuccessDialogComponent, {

            });
            this.router.navigate(['/test'])
          }else{
              //mensaje de error
            const dialogRef2 = this.dialog.open(FailDialogComponent, {

              });
              this.router.navigate(['/test'])
          }

          return
        });

      });

    }




  }
