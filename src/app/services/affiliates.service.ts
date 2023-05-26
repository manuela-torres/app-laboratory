import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable, map, } from 'rxjs';
import { Affiliate } from '../models/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private baseUrl="http://localhost:8080/api/controller";



  constructor(private httpClient: HttpClient) { }

  getListAffiliates():Observable<Affiliate[]>{
    return this.httpClient.get<Affiliate[]>(`${this.baseUrl}/affiliates`);
  }

  getAffiliateById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/affiliates/${id}`)
  }



  createAffiliate(affiliate:Affiliate): Observable<Affiliate>{
    return this.httpClient.post<Affiliate>(`${this.baseUrl}/affiliates`,affiliate);

  }

  updateAffiliate(affiliate:Affiliate): Observable<Affiliate>{
    if(!affiliate.idAffiliate) throw Error ('No existe el afiliado')
    return this.httpClient.put<Affiliate>(`${this.baseUrl}/affiliates/${affiliate.idAffiliate}`,affiliate);

  }

  deleteAffiliateById(id:number): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl}/affiliates/${id}`, {observe: 'response'})
    .pipe(

      map (resp=> resp.status===HttpStatusCode.Ok)
    );

  }
}
