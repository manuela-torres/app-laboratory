import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Affiliate } from '../models/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private baseUrl="http://localhost:8080/api/controller";

  //private headers:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient: HttpClient) { }

  getListAffiliates():Observable<Affiliate[]>{
    return this.httpClient.get<Affiliate[]>(`${this.baseUrl}/affiliates`);
  }

  getAffiliateById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/affiliates/${id}`)
  }

  // createAffiliate(affiliate:Affiliate): Observable<Affiliate>{
  //   return this.httpClient.post<Affiliate>(`${this.baseUrl}/affiliates`, affiliate,{headers:this.headers});
  // }

  createAffiliate(affiliate:Affiliate): Observable<Affiliate>{
    return this.httpClient.post<Affiliate>(`${this.baseUrl}/affiliates`,affiliate);

  }

  updateAffiliate(affiliate:Affiliate): Observable<Affiliate>{
    if(!affiliate.idAffiliate) throw Error ('No existe el afiliado')
    return this.httpClient.put<Affiliate>(`${this.baseUrl}/affiliates/${affiliate.idAffiliate}`,affiliate);

  }

  deleteAffiliateById(id:number): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl}/affiliates/${id}`)
    .pipe(
      catchError (err => of (false)),
      map (resp=> true)
    );

  }
}
