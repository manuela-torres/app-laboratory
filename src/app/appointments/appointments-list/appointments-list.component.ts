import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { AppointmentsService } from 'src/app/services/appointments.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', },

];

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  displayedColumns: string[] = ['id', 'date', 'hora', 'idTest','idAffiliate','option'];
  dataSource = ELEMENT_DATA;

  public appointments: Appointment[];

  constructor(private appointmentsService:AppointmentsService){}

  ngOnInit():void{
    this.getListAppointments1();

  }

  getListAppointments1(){
    this.appointmentsService.getListAppointments().subscribe(response =>
      {this.appointments=response
      console.log(response);


      }
    )
  }

}
