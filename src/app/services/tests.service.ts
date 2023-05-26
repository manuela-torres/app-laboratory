import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private baseUrl="http://localhost:8080/api/controller"

  constructor(private httpClient: HttpClient) { }


  getListTest(): Observable<Test[]>{
    return this.httpClient.get<Test[]>(`${this.baseUrl}/test`);

  }

  getTestById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/test/${id}`)

  }

  createTest(test:Test): Observable<Test>{
    return this.httpClient.post<Test>(`${this.baseUrl}/test`,test);

  }


  updateTest(test:Test): Observable<Test>{
    return this.httpClient.put<Test>(`${this.baseUrl}/test/${test.idTest}`,test);

  }

  deleteTestById(id:number): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl}/test/${id}`, {observe: 'response'})
    .pipe(

      map (resp=> resp.status===HttpStatusCode.Ok )
    );

  }


}
