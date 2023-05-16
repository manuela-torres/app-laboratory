import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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

  getTestById(id:number): Observable<Test|undefined>{
    return this.httpClient.get<Test>(`${this.baseUrl}/test/${id}`)
    .pipe(
      catchError (error => of (undefined)) //fernando 195
    )

  }

  createTest(test:Test): Observable<Test>{
    return this.httpClient.post<Test>(`${this.baseUrl}/test`,test);

  }
}
