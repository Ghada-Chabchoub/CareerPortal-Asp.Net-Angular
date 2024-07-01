import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-candidat-view-offer',
  templateUrl: './candidat-view-offer.component.html',
  styleUrls: ['./candidat-view-offer.component.css']
})
export class CandidatViewOfferComponent implements OnInit {
  offer: Offer | undefined;
  profil_id: string | undefined='6ed02934-ae54-49f8-8737-0a586ce0639f';

  constructor(private route: ActivatedRoute, private router: Router, private offerService: OfferService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.offerService.getOfferById(id).subscribe(response => {
          this.offer = response;
        });
      }
    });
  }

  onParticipateClick(): void {
    if (this.offer?.id) {
      this.router.navigate(['/candidat/candidature/add', this.offer.id,this.profil_id]);
    }
  }
}