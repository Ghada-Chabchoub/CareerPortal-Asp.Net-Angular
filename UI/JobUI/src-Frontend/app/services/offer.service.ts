import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';
import { UpdateOfferRequest } from '../models/update-offer.model';
import { AddOfferRequest } from '../models/add-offer.model';

@Injectable({
  providedIn: 'root'
})


export class OfferService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:44322';

  getAllOffers(): Observable<Offer[]>{
 
    return this.http.get<Offer[]>(this.apiBaseUrl +'/api/offer');
  }
  getOfferById(id: string): Observable<Offer>{

    return this.http.get<Offer>(this.apiBaseUrl +'/api/offer/'+id);
  }

  updateOffer(id: string | undefined,updateOfferRequest: UpdateOfferRequest): Observable<Offer>{

    return this.http.put<Offer>(this.apiBaseUrl +'/api/offer/'+id,updateOfferRequest);
  }
  
  addOffer(addOfferRequest:AddOfferRequest): Observable<Offer>{
    return this.http.post<Offer>(this.apiBaseUrl +'/api/offer',addOfferRequest);
  }


  deleteOffer(id: string | undefined): Observable<Offer>{
    return this.http.delete<Offer>(this.apiBaseUrl +'/api/offer/'+id);
  }
}
