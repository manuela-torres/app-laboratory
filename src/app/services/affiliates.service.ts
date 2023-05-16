import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affiliate } from '../models/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private baseUrl="http://localhost:8080/api/controller";

  private headers:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient: HttpClient) { }

  getListAffiliates():Observable<Affiliate[]>{
    return this.httpClient.get<Affiliate[]>(`${this.baseUrl}/affiliates`);
  }

  createAffiliate(affiliate:Affiliate): Observable<Affiliate>{
    return this.httpClient.post<Affiliate>(`${this.baseUrl}/affiliates`, affiliate,{headers:this.headers});

  }
}
