import { Component } from '@angular/core';
import { Candidature } from 'src/app/models/candidature.model';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidat-candidatures',
  templateUrl: './candidat-candidatures.component.html',
  styleUrls: ['./candidat-candidatures.component.css']
})
export class CandidatCandidaturesComponent {
  candidatures: Candidature[] = [];
  filteredCandidatures: Candidature[] = [];
  filterText: string = ''; 
  
  constructor (private candidatureService: CandidatureService){}

  ngOnInit(): void {
    this.candidatureService.getAllCandidatures().subscribe(
      response => {
        this.candidatures = response;
        this.filteredCandidatures = response;
        console.log('Fetched candidatures:', this.filteredCandidatures);
      }
    );
  }
  

  filterResults() {
    console.log('Filtering with text:', this.filterText);

    if (!this.filterText) {
      this.filteredCandidatures = this.candidatures;
      return;
    }

    this.filteredCandidatures = this.candidatures.filter(
      candidature => candidature.company_name.toLowerCase().includes(this.filterText.toLowerCase())
    );

    console.log('Filtered Candidature:', this.filteredCandidatures);
  }
  
}
