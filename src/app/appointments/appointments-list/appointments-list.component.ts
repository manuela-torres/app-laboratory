import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';



@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  displayedColumns: string[] = ['id', 'date', 'hora', 'idTest','idAffiliate','option'];


  public appointments: Appointment[];
  public pathEdith = '/appointments/editappointment/'
  public pathDelete = '/appointments/delete-appointment/'

  constructor(private appointmentsService:AppointmentsService){}

  ngOnInit():void{
    this.getListAppointments1();

  }

  getListAppointments1(){
    this.appointmentsService.getListAppointments().subscribe(response =>
      {this.appointments=response
      ;


      }
    )
  }

}
