import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent {


  constructor(public dialogRef:MatDialogRef<SuccessDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public message: string,
    private router:Router,
    public dialog: MatDialog){}

    ngOnInit(){}

    OnClickList(){

      this.dialogRef.close();
      this.router.navigate(['/home'])

    }

}
