import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { TestsService } from 'src/app/services/tests.service';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent {

  //formulario reactivo
  public testForm = new FormGroup({

    idTest: new FormControl <number>(100),
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });

    constructor(private testServicePost: TestsService, private router:Router,
    public dialog: MatDialog){}

    get currentTest(): Test{
      const test = this.testForm.value as Test;
      return test;

    }

    createTest (){
      this.testServicePost.createTest(this.currentTest).subscribe(dato =>{
        console.log(dato);})
    }

  onSubmit():void{
    if(this.testForm.invalid) return;
    this.createTest();
  }

  openDialog():void{
    const dialogRef=this.dialog.open(SuccessDialogComponent,{


    });
    dialogRef.afterClosed().subscribe(respuesta=>{
      console.log(respuesta)
    })
  }



}
