import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Affiliate } from 'src/app/models/affiliate';
import { Appointment } from 'src/app/models/appointment';
import { IdTest } from 'src/app/models/idTest';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {

  private objetoAppointment :Appointment = new Appointment();
  private objetoTest: IdTest= new IdTest();
  private objetoAffiliate: Affiliate = new Affiliate();

  public appointmentEditForm:FormGroup = this.fb.group({

    id: [],
    date:[''],
    hora: [''],
    idTest:[],
    idAffiliate:[],

  });

  constructor(
    public dialog: MatDialog,
    private appointmentService: AppointmentsService,
    private fb: FormBuilder,
    private activetedRoute: ActivatedRoute

    ){}

    ngOnInit(){

      this.activetedRoute.params.
      pipe(
        switchMap(({id}) => this.appointmentService.getAppointmentById(id) ),

      )
      .subscribe(test =>{

        let arrayAppointment = Object.values(test)
        console.log(arrayAppointment)
        this.appointmentEditForm.get('id')?.setValue(arrayAppointment[0])
        //this.appointmentEditForm.get('date')?.setValue(arrayAppointment[1])
        //this.appointmentEditForm.get('hora')?.setValue(arrayAppointment[2])
        this.appointmentEditForm.get('idTest')?.setValue(arrayAppointment[3].idTest)
        this.appointmentEditForm.get('idAffiliate')?.setValue(arrayAppointment[4].idAffiliate)

        console.log(this.appointmentEditForm.value)

        return;
      })


    }


    updateAppointment (){

    this.objetoTest.idTest = this.appointmentEditForm.value.idTest,

    this.objetoAffiliate.idAffiliate= this.appointmentEditForm.value.idAffiliate;

    this.objetoAppointment.id = this.appointmentEditForm.value.id;

    let dateChange= new Date (this.appointmentEditForm.value.date)

    this.objetoAppointment.date = dateChange.toLocaleDateString('es-CO',{day:'2-digit', month:'2-digit', year:'numeric'})
    this.objetoAppointment.hora = this.appointmentEditForm.value.hora,
    this.objetoAppointment.idAffiliate = this.objetoAffiliate,
    this.objetoAppointment.idTest = this.objetoTest,

      this.appointmentService.updateAppointment(this.objetoAppointment).subscribe(dato =>{
        console.log(dato);})
    }

    onSubmit():void{
      if(this.appointmentEditForm.invalid) return;
      this.updateAppointment();

    }

}
