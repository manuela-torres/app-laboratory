import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-fail-dialog',
  templateUrl: './fail-dialog.component.html',
  styleUrls: ['./fail-dialog.component.css']
})
export class FailDialogComponent  {

  constructor(public dialogRef:MatDialogRef<FailDialogComponent>,

    public dialog: MatDialog){}



    OnClickList(){

      this.dialogRef.close();


    }

}
