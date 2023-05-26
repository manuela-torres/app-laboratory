import { Component, Inject, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs';
import { IdAffiliate } from 'src/app/models/idAffiliates';
import { DOCUMENT, Location } from '@angular/common'






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

  title = 'angular-mat-table-example';


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
              public _router: Router, public _location: Location,
              @Inject(DOCUMENT) private _document: Document
    )

  { }

   ngOnInit():void{

    this.getListAffiliates();
    //this.getListAppointments();


  }


  getListAffiliates(){
    this.affiliatesService1.getListAffiliates().subscribe(response =>
      {//this.affiliatesHome=response
        this.affiliateCopy=response
      //this.affiliateCopy= this.affiliatesHome.slice(0)
      //console.log(this.affiliateCopy);
      },
     )
   }

  //  getListAppointments(){

  //   this.appointmentsService1.getListAppointments().subscribe(response=>
  //     {this.appointments=response;
  //       console.log(response);
  //       this.appointmentsCopy= this.appointments.slice(0)
  //       console.log(this.appointmentsCopy, 'chao');

  //     }
  //     )

  //  }

  getAppointmentsByAffiliateId(idAffiliate: number){
    this.appointmentsService1.getAppointmentByIdAffiliate(idAffiliate).subscribe(response=>
      {this.appointments=response;
      }
      )
  }


  toggleRow(element: { expanded: boolean}, idAffiliate:number) { //,

    // Uncommnet to open only single row at once
    // affiliatesHome.forEach(row => {
    //   row.expanded = false;
    // })

    element.expanded = !element.expanded




    console.log(this.appointments, 'antes filtro')


    if(this.appointmentsCopy) {
      console.log(this.appointments)
      console.log(this.appointmentsCopy, 'copy');

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
    let date3= date1.toLocaleDateString('es-CO',{day:'2-digit', month:'2-digit', year:'numeric'})
    let finalDate= date2.slice(0,10)
    console.log(finalDate);

    this.appointmentsService1.getAppointmentByDate(finalDate).subscribe(response=>
      {this.appointments=response;
        // console.log(response,'uno')
        this.appointmentsCopy= this.appointments.slice(0)
        //console.log(this.appointmentsCopy, 'dos');
        //this.appointments=this.appointmentsCopy.filter(response=>
          //response.date===String(date3))

      //console.log(this.appointmentsCopy, 'cuatro');

      this.affiliatesHome=this.affiliateCopy.filter(b=>
        response.map(c=> c.idAffiliate.idAffiliate).includes(b.idAffiliate)
        )

      // this.appointments=this.appointmentsCopy.filter(a=>
      // a.date===String(date3))

      //console.log(this.appointments,'tres');

      })


    // console.log(this.appointments,'tres');



  }

	refresh(): void {
		this._router.navigateByUrl("/home", { skipLocationChange: false }).then(() => {
		console.log(decodeURI(this._location.path()));
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

  refreshPage() {
    this._document.defaultView?.location.reload();
  }


}
