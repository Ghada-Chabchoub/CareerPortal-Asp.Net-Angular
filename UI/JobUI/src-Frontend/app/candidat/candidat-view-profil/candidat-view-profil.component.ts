import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/app/models/profil.model';
import { UpdateProfilRequest } from 'src/app/models/update-profil.model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-candidat-view-profil',
  templateUrl: './candidat-view-profil.component.html',
  styleUrls: ['./candidat-view-profil.component.css']
})
export class CandidatViewProfilComponent implements OnInit {

  constructor( private route: ActivatedRoute, private profilService: ProfilService ){}
  profil : Profil | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //const id = params.get('id');
      const id = "7707B2F2-7FCB-40C0-A5A5-D858C8162D50";
      if (id) {
        this.profilService.getProfilById(id).subscribe({
          next: (response: Profil) => {
            this.profil = response;
          },
          error: (error: any) => {
            console.error(error);
          },
        });
      }
    });
  }

  onSubmit(): void{
    console.log('Submit button clicked');
    const updateProfilRequest:UpdateProfilRequest = {
      Nom : this.profil?.Nom,
      Prenom : this.profil?.Prenom,
      Email : this.profil?.Email,
      Phone : this.profil?.Phone,
      Location : this.profil?.Location,
      Degree : this.profil?.Degree,
      ImageUrl : this.profil?.ImageUrl,
      Major : this.profil?.Major,
      Age : this.profil?.Age,
      Description : this.profil?.Description

    }
    this.profilService.updateProfil(this.profil?.ID_Profil,updateProfilRequest)
    .subscribe(
      response =>{
        alert('success');
      }
    );
  }

  deleteProfil() : void{
    this.profilService.deleteProfil(this.profil?.ID_Profil)
    .subscribe(
      response => {
        alert("Deleted successfully");
      }
    );
  }
}

 