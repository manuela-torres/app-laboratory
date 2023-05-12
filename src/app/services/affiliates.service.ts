import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affiliate } from '../models/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private baseUrl="http://localhost:8080/api/controller"

  constructor(private httpClient: HttpClient) { }

  getListAffiliates():Observable<Affiliate[]>{
    return this.httpClient.get<Affiliate[]>(`${this.baseUrl}/affiliates`);
  }
}
