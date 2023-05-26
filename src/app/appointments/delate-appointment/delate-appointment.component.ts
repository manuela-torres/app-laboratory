import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-delate-appointment',
  templateUrl: './delate-appointment.component.html',
  styleUrls: ['./delate-appointment.component.css']
})

export class DelateAppointmentComponent {



  public appointmentId: number;
  public appointmentDate:string;
  public appointmentTime :string;
  public appointmentIdTest: string;
  public appointmentIdAffiliate: string;

  constructor(private appointmentService: AppointmentsService,
    private dialog: MatDialog,
    private activetedRoute: ActivatedRoute,
    private router:Router){}


    ngOnInit():void{

      this.activetedRoute.params.
     pipe(
       switchMap(({id}) => this.appointmentService.getAppointmentById(id) ),

     )
     .subscribe(affiliate =>{

       let arrayAppointment = Object.values(affiliate)
       this.appointmentId=(arrayAppointment[0])
       this.appointmentDate= (arrayAppointment[1])
       this.appointmentTime= (arrayAppointment[2])
       this.appointmentIdTest= (arrayAppointment[3].idTest)
       this.appointmentIdAffiliate= (arrayAppointment[4].idAffiliate)

       return;
     })
   }

   openDialogDelete():void{

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;

      this.appointmentService.deleteAppointmentById(this.appointmentId).subscribe(wasDeleted =>{
        if (wasDeleted)
        this.router.navigate(['/appointments'])

        const dialogRef1 = this.dialog.open(SuccessDialogComponent, {

        });

        return
      });

    });

  }


}
