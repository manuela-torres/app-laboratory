import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs';



// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: string;
//   phone: string;
//   website: string;
//   company: string;
//   expanded: boolean;

// }

// const ELEMENT_DATA: User[] = [
//   {
//     "id": 123,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": "Kulas Light Apt. 556 Gwenborough",
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": "Romaguera-Crona",
//     "expanded": false
//   },
//   {
//     "id": 52,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": "Victor Plains Suite 879 Wisokyburgh",
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": "Deckow-Crist",
//     "expanded": false
//   },
//   {
//     "id": 62,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": "Douglas Extension Suite 847 McKenziehaven",
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": "Romaguera-Jacobson",
//     "expanded": false
//   },
//   {
//     "id": 65,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": "Hoeger Mall Apt. 692 South Elvis",
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": "Robel-Corkery",
//     "expanded": false
//   },
//   {
//     "id": 84,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": "Skiles Walks Suite 351 Roscoeview",
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": "Keebler LLC",
//     "expanded": false
//   }
// ];


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA_Element: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



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

  displayedColumns = ['id', 'date', 'hora', 'idTest'];


  //public appointmentsHome?: Appointment;
  public affiliatesHome: Affiliate[];
  public appointments: Appointment[];
  public expandedElement: any|null;

  constructor(private affiliatesService1: AffiliatesService,
              private appointmentsService1: AppointmentsService,
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

      },

     )

   }

  getAppointmentsByAffiliateId(idAffiliate: number){
    this.appointmentsService1.getAppointmentByIdAffiliate(idAffiliate).subscribe(response=>
      {this.appointments=response;
        console.log(response);
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


}
