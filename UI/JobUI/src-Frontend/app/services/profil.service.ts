import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../models/profil.model';
import { Observable } from 'rxjs/internal/Observable';
import { AddProfilRequest } from '../models/add-profil.model';
import { UpdateProfilRequest } from '../models/update-profil.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:44322';

  getAllProfils(): Observable<Profil[]>{
 
    return this.http.get<Profil[]>(this.apiBaseUrl +'/api/profil');
  }
  getProfilById(profil_id: string): Observable<Profil>{
    return this.http.get<Profil>(this.apiBaseUrl +'/api/profil/'+profil_id);
  }
  addProfil(addProfilRequest:AddProfilRequest): Observable<Profil>{
    return this.http.post<Profil>(this.apiBaseUrl +'/api/profil',addProfilRequest);
  }
  updateProfil(id: string | undefined,updateProfilRequest: UpdateProfilRequest): Observable<Profil>{

    return this.http.put<Profil>(this.apiBaseUrl +'/api/profil/'+id,updateProfilRequest);
  }
  



  deleteProfil(id: string | undefined): Observable<Profil>{
    return this.http.delete<Profil>(this.apiBaseUrl +'/api/profil/'+id);
  }
}

 