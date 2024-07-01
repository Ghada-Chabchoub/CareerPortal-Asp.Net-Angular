import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCandidatureRequest } from 'src/app/models/add-candidature.model';
import { Offer } from 'src/app/models/offer.model';
import { Profil } from 'src/app/models/profil.model';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OfferService } from 'src/app/services/offer.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-candidat-add-candidature',
  templateUrl: './candidat-add-candidature.component.html',
  styleUrls: ['./candidat-add-candidature.component.css']
})
export class CandidatAddCandidatureComponent implements OnInit {

  currentoffer: Offer | undefined;
  currentprofil: Profil | undefined;

  constructor(
    private candidatureService: CandidatureService,
    private route: ActivatedRoute,
    private route2: ActivatedRoute,
    private offerService: OfferService,
    private profilService: ProfilService
  ) { }

  candidature: AddCandidatureRequest = {
    Title: '',
    Company_name: '',

    PNom: '',
    PPrenom: '',
    PEmail: '',
    PPhone: 0,

    PLocation: '',
    PDegree: '',
    PImageUrl: '',

    PMajor: '',
    PAge: 0,

    PDescription: '',
    Etat_Candidature: 'Pending'
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.offerService.getOfferById(id).subscribe(response1 => {
          this.currentoffer = response1;
          this.candidature.Title = this.currentoffer?.title;
          this.candidature.Company_name = this.currentoffer?.company_name;
        });
      }
    });

    this.route2.paramMap.subscribe(params => {
    const id2 = params.get('profil_id');

    if (id2) {
      this.profilService.getProfilById(id2).subscribe({
        next: (response) => {
          // Handle the successful response
          this.currentprofil = response;
          this.candidature.PNom = this.currentprofil.Degree;


        },
        error: (error: any) => {
          // Handle the error
          console.error('Error fetching profile:', error);
        }
      });
    }
  });

  }

  onSubmit() {
    this.candidatureService.addCandidature(this.candidature).subscribe(
      response3 => {
        alert('Candidature added successfully.');
      },
      (error) => {
        console.error('Error adding candidature:', error);
        alert('Failed to add candidature. Please try again.');
      }
    );
  }
}
