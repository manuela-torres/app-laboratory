import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Test } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent {

  public editTestForm:FormGroup = this.fb.group({

    idTest: [],
    name:[''],
    description: [''],

  });

  constructor(private testServicePut: TestsService, private router:Router,
    public dialog: MatDialog, private testService1: TestsService,private fb: FormBuilder,
    private activetedRoute: ActivatedRoute){}


    ngOnInit():void{

      this.activetedRoute.params.
      pipe(
        switchMap(({id}) => this.testService1.getTestById(id) ),

      )
      .subscribe(test =>{

        let arrayTest = Object.values(test)
        this.editTestForm.get('name')?.setValue(arrayTest[1])
        this.editTestForm.get('description')?.setValue(arrayTest[2])
        this.editTestForm.get('idTest')?.setValue(arrayTest[0])

        return;
      })
    }


  updateTest (){
      this.testServicePut.updateTest(this.editTestForm.value).subscribe(dato =>{
        console.log(dato);})
    }

  onSubmit():void{
    if(this.editTestForm.invalid) return;
    this.updateTest();

  }


  openDialog():void{
    const dialogRef=this.dialog.open(SuccessDialogComponent,{


    });
    dialogRef.afterClosed().subscribe(respuesta=>{
      console.log(respuesta)
    })
  }

 }



