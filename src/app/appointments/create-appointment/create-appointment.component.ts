import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Affiliate } from 'src/app/models/affiliate';
import { Appointment } from 'src/app/models/appointment';
import { IdTest } from 'src/app/models/idTest';
import { Test } from 'src/app/models/test';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';






@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  private objetoAppointment :Appointment = new Appointment();
  private objetoTest: IdTest= new IdTest();
  private objetoAffiliate: Affiliate = new Affiliate();

  public appointmentForm:FormGroup = this.fb.group({

    id: [],
    date:[''],
    hora: [''],
    idTest:[],
    idAffiliate:[],

  });



  constructor( private router:Router,
    public dialog: MatDialog,
    private appointmentServicePost: AppointmentsService,
    @Inject(LOCALE_ID) private locale: string,
    private fb: FormBuilder,

    ){}


    ngOnInit(){


    }


    onSubmit():void{
    this.createAppointment();

  }



  createAppointment (){

    this.objetoTest.idTest = this.appointmentForm.value.idTest,

    this.objetoAffiliate.idAffiliate= this.appointmentForm.value.idAffiliate;

    //this.objetoAppointment.id = 9,

    let dateChange= new Date (this.appointmentForm.value.date)

    this.objetoAppointment.date = dateChange.toLocaleDateString('es-CO',{day:'2-digit', month:'2-digit', year:'numeric'})
    this.objetoAppointment.hora = this.appointmentForm.value.hora,
    this.objetoAppointment.idAffiliate = this.objetoAffiliate,
    this.objetoAppointment.idTest = this.objetoTest,


    this.appointmentServicePost.createAppointment(this.objetoAppointment).subscribe(dato =>{
      console.log(dato);})
  }

  openDialog():void{
    const dialogRef=this.dialog.open(SuccessDialogComponent,{


    });
    dialogRef.afterClosed().subscribe(respuesta=>{
      console.log(respuesta)
    })
  }


}
