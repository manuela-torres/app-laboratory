import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private baseUrl="http://localhost:8080/api/controller"

  constructor(private httpClient: HttpClient) { }

  /*Función que consume el servicio get de test*/

  getListTest(): Observable<Test[]>{
    return this.httpClient.get<Test[]>(`${this.baseUrl}/test`);//(this.baseUrl)+"test";

  }
}
