import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError, of } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  //private baseUrl="/api/controller"
  private baseUrl="http://localhost:8080/api/controller"

  constructor(private httpClient: HttpClient) { }

  getListAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/appointments`);
  }

  getAppointmentByIdAffiliate(idAffiliate:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/appointments/idAffiliate/${idAffiliate}`)
    // .pipe(
    //   catchError (error => of (undefined)) //fernando 195
    // )
  }

  createAppointment(appointment:Appointment): Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}/appointments`,appointment);

  }

  getAppointmentById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/appointments/${id}`)
  }

  updateAppointment(appointment:Appointment): Observable<Appointment>{
    if(!appointment.id) throw Error ('No existe la cita')
    return this.httpClient.put<Appointment>(`${this.baseUrl}/appointments/${appointment.id}`,appointment);

  }


}
