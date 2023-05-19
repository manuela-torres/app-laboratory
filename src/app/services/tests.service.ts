import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

  getTestById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/test/${id}`)
    // .pipe(
    //   catchError (error => of (undefined)) //fernando 195
    // )

  }

  createTest(test:Test): Observable<Test>{
    return this.httpClient.post<Test>(`${this.baseUrl}/test`,test);

  }


  updateTest(test:Test): Observable<Test>{
    return this.httpClient.put<Test>(`${this.baseUrl}/test/${test.idTest}`,test);

  }

  deleteTestById(id:number): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl}/test/${id}`)
    .pipe(
      catchError (err => of (false)),
      map (resp=> true)
    );

  }


}
