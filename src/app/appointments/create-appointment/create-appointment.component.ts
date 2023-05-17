import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  public appointmentForm = new FormGroup({// Forma 1

    id:new FormControl <number>(100),
    date:new FormControl (''),
    hora: new FormControl(''),
    idTest:new FormControl(''),
    idAffiliate:new FormControl<number>(100),


  });

  citas:Appointment={ //Forma 2
    id:0,
    date:"",
    hora:"",
    idTest:"",
    idAffiliate:0
  }

  constructor( private router:Router,
    public dialog: MatDialog,
    private appointmentServicePost: AppointmentsService,){}

//forma 1
    get currentAppointment(): Appointment{
      const appointment = this.appointmentForm.value as Appointment;
      return appointment;

    }
//-----
    ejemplo():void{

      this.citas=this.appointmentForm.value as Appointment;

      console.log(this.citas) //se imprime los inciales porque no le he pasado nada
      console.log(this.currentAppointment) //se imprime lo que le paso pues los alcanza a capturar
    }


    onSubmit():void{
    if(this.appointmentForm.invalid) return;
    this.createAppointment();
    console.log(this.currentAppointment)
    console.log(this.citas)
  }

  createAppointment (){
    this.appointmentServicePost.createAppointment(this.citas).subscribe(dato =>{
      console.log(dato);})
  }

}
