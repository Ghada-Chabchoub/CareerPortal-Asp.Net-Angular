import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Candidature } from '../models/candidature.model';
import { AddCandidatureRequest } from '../models/add-candidature.model';
import { UpdateCandidatureRequest } from '../models/update-candidature.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:44322';

  getAllCandidatures(): Observable<Candidature[]>{
 
    return this.http.get<Candidature[]>(this.apiBaseUrl +'/api/candidature');
  }
  getCandidatureById(id: string): Observable<Candidature>{

    return this.http.get<Candidature>(this.apiBaseUrl +'/api/candidature/'+id);
  }

  updateCandidature(id: string | undefined,updateOfferRequest: UpdateCandidatureRequest): Observable<Candidature>{

    return this.http.put<Candidature>(this.apiBaseUrl +'/api/candidature/'+id,updateOfferRequest);
  }
  
  addCandidature(addCandidatureRequest:AddCandidatureRequest): Observable<Candidature>{
    return this.http.post<Candidature>(this.apiBaseUrl +'/api/candidature',addCandidatureRequest);
  }


  deleteCandidature(id: string | undefined): Observable<Candidature>{
    return this.http.delete<Candidature>(this.apiBaseUrl +'/api/candidature/'+id);
  }
}
