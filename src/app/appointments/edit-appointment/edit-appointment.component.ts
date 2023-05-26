import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Affiliate } from 'src/app/models/affiliate';
import { Appointment } from 'src/app/models/appointment';
import { IdTest } from 'src/app/models/idTest';
import { Test } from 'src/app/models/test';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { TestsService } from 'src/app/services/tests.service';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {

  private objetoAppointment :Appointment = new Appointment();
  private objetoTest: IdTest= new IdTest();
  private objetoAffiliate: Affiliate = new Affiliate();

  public appointments: Appointment[];
  public tests: Test[];
  public affiliates: Affiliate[];

  public appointmentEditForm:FormGroup = this.fb.group({

    id: [],
    date:['', Validators.required],
    hora: ['', Validators.required],
    idTest:['', Validators.required],
    idAffiliate:['', Validators.required],

  });

  constructor(
    public dialog: MatDialog,
    private appointmentService: AppointmentsService,
    private fb: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private testsService: TestsService,
    private affiliatesService: AffiliatesService,
    private router:Router

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

        this.appointmentEditForm.get('idTest')?.setValue(arrayAppointment[3].idTest)
        this.appointmentEditForm.get('idAffiliate')?.setValue(arrayAppointment[4].idAffiliate)



        return;
      })

      this.getListTest1();
      this.getListAffiliates();


    }

    getListTest1(){

      this.testsService.getListTest().subscribe(response =>{
        this.tests= response;


      })
    }

    getListAffiliates(){
      this.affiliatesService.getListAffiliates().subscribe(response =>
        {this.affiliates=response

        }
      )
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
        ;})
    }

    onSubmit():void{
      if(this.appointmentEditForm.invalid) return;
      this.updateAppointment();

    }

    openDialog():void{
      const dialogRef=this.dialog.open(SuccessDialogComponent,{


      });
      dialogRef.afterClosed().subscribe(respuesta=>{

        this.router.navigate(['/appointments'])
      })
    }


}
