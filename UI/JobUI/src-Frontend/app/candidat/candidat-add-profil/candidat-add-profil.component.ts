import { Component, OnInit } from '@angular/core';
import { AddProfilRequest } from 'src/app/models/add-profil.model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-candidat-add-profil',
  templateUrl: './candidat-add-profil.component.html',
  styleUrls: ['./candidat-add-profil.component.css']
})
export class CandidatAddProfilComponent  implements OnInit{

  constructor(private profilService: ProfilService){}

  profil : AddProfilRequest = {
    Nom: "",
    Prenom : "",
    Email : "",
    Phone  : 0,
    Location  : "",
    Degree  : "",
    ImageUrl  : "",
    Major  : "",
    Age  : 0,
    Description  : "",

  }
  ngOnInit(): void {   
  }

  onSubmit(){

    this.profilService.addProfil(this.profil)
    .subscribe(
      response => {
        alert("Success");
      }
    );
  }
}