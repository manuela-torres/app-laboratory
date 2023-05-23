import { Component, OnInit } from '@angular/core';
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




  //public appointmentsHome?: Appointment;
  public affiliatesHome: Affiliate[];
  public affiliateCopy: Affiliate[];
  public appointments: Appointment[];
  public expandedElement: any|null;


  public affiliateIdForm:FormGroup = this.fb.group({

    idAffiliate1: [],

  });

  constructor(private affiliatesService1: AffiliatesService,
              private appointmentsService1: AppointmentsService,
              private fb: FormBuilder,
    // private activatedRoute: ActivatedRoute,
    // private router:Router,
    )

  { }

   ngOnInit():void{

    this.getListAffiliates();




  // //   this.activatedRoute.params.
  // //   pipe(
  // //     switchMap( ({idAffiliate})=> this.appointmentsService1.getAppointmentByIdAffiliate( idAffiliate)),

  // //   ).subscribe(appointment =>{
  // //     if(!appointment) return this.router.navigate(['/home']);
  // //     this.appointmentsHome=appointment;
  // //     console.log({appointment})
  // //     return;
  // // })

  }


  getListAffiliates(){
    this.affiliatesService1.getListAffiliates().subscribe(response =>
      {this.affiliatesHome=response
      console.log(response);
      console.log("hola")
      this.affiliateCopy= this.affiliatesHome.slice(0)
      console.log(this.affiliateCopy);


      },

     )

   }

  getAppointmentsByAffiliateId(idAffiliate: number){
    this.appointmentsService1.getAppointmentByIdAffiliate(idAffiliate).subscribe(response=>
      {this.appointments=response;
        //console.log(response);
      }
      )
  }


  toggleRow(element: { expanded: boolean}, idAffiliate:number) { //,

    // Uncommnet to open only single row at once
    // affiliatesHome.forEach(row => {
    //   row.expanded = false;
    // })

    element.expanded = !element.expanded,
    this.getAppointmentsByAffiliateId( idAffiliate)

  }

  manageAllRows(flag: boolean) {
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = flag;
    // })
  }

  onSearchAffiliateById():void{
    // this.appointmentsService1.getAppointmentByIdAffiliate(this.affiliateIdForm.value.idAffiliate1).subscribe(response=>
    //   {this.appointments=response;
    //     console.log(response);

    //   }
    //   )
    this.affiliatesHome=this.affiliateCopy.filter(response=>
      response.idAffiliate===Number(this.affiliateIdForm.value.idAffiliate1)
     )


  }


}
