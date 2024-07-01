import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature } from 'src/app/models/candidature.model';
import { UpdateCandidatureRequest } from 'src/app/models/update-candidature.model';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-recruter-view-candidatures',
  templateUrl: './recruter-view-candidatures.component.html',
  styleUrls: ['./recruter-view-candidatures.component.css']
})
export class RecruterViewCandidaturesComponent {
  constructor( private route: ActivatedRoute, private candidatureService: CandidatureService ){}
  candidature : Candidature | undefined;

  etatCandidatureOptions = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Accepted', label: 'Accepted' },
    { value: 'Rejected', label: 'Rejected' }
  ];
  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      params => {
        const id = params.get('id');
 
        if(id) {
          this.candidatureService.getCandidatureById(id)
          .subscribe(
            response => {
              this.candidature = response;
            }
          )

        }
      }
    );

      
  }

  onSubmit(): void{
    const updateCandidatureRequest:UpdateCandidatureRequest = {
      etat_Candidature : this.candidature?.etat_Candidature,
    
    }
    this.candidatureService.updateCandidature(this.candidature?.iD_Candidature,updateCandidatureRequest)
    .subscribe(
      response =>{
        alert('success');
      }
    );
  }

  deleteOffer() : void{
    this.candidatureService.deleteCandidature(this.candidature?.iD_Candidature)
    .subscribe(
      response => {
        alert("Deleted successfully");
      }
    );
  }
}
