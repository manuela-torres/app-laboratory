import { Component, Inject, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {FormBuilder,  FormGroup, } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { DOCUMENT } from '@angular/common'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class HomeComponent implements OnInit { //implements OnInit


  columnsToDisplay = ['expand','idAffiliate', 'name', 'age', 'mail'];

  displayedColumns = ['id', 'date', 'hora', 'idTest','expand_second'];

  public affiliatesHome: Affiliate[];
  public affiliateCopy: Affiliate[];
  public appointments: Appointment[];
  public appointmentsCopy: Appointment[];
  public expandedElement: any|null;


  public affiliateIdForm:FormGroup = this.fb.group({

    idAffiliate1: [],

  });

  public appointmentDateForm:FormGroup = this.fb.group({

    date: [''],

  });

  constructor(private affiliatesService1: AffiliatesService,
              private appointmentsService1: AppointmentsService,
              private fb: FormBuilder,
              @Inject(DOCUMENT) private _document: Document
    )

  { }

   ngOnInit():void{

    this.getListAffiliates();

  }


  getListAffiliates(){
    this.affiliatesService1.getListAffiliates().subscribe(response =>
      { this.affiliateCopy=response
      },
     )
   }



  getAppointmentsByAffiliateId(idAffiliate: number){
    this.appointmentsService1.getAppointmentByIdAffiliate(idAffiliate).subscribe(response=>
      {this.appointments=response;
      }
      )
  }


  toggleRow(element: { expanded: boolean}, idAffiliate:number) {

    element.expanded = !element.expanded


    if(this.appointmentsCopy) {


      this.appointments=this.appointmentsCopy.filter(a=>

       a.idAffiliate.idAffiliate===idAffiliate
      )

    } else{
      this.getAppointmentsByAffiliateId(idAffiliate)
    }

  }



  onSearchAffiliateById():void{

    this.affiliatesHome=this.affiliateCopy.filter(response=>
      response.idAffiliate===Number(this.affiliateIdForm.value.idAffiliate1)
     )
  }

  onSearchAppointmentByDate():void{

    let date1= new Date (this.appointmentDateForm.value.date)
    let date2= date1.toISOString()
    //let date3= date1.toLocaleDateString('es-CO',{day:'2-digit', month:'2-digit', year:'numeric'})
    let finalDate= date2.slice(0,10)


    this.appointmentsService1.getAppointmentByDate(finalDate).subscribe(response=>
      {this.appointments=response;

        this.appointmentsCopy= this.appointments.slice(0)

        this.affiliatesHome=this.affiliateCopy.filter(b=>
        response.map(c=> c.idAffiliate.idAffiliate).includes(b.idAffiliate)
        )

      })

  }



  refreshPage() {
    this._document.location.reload();
  }


}
