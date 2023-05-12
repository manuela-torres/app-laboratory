import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private baseUrl="http://localhost:8080/api/controller"

  constructor(private httpClient: HttpClient) { }

  getListAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/appointments`);
  }


}
