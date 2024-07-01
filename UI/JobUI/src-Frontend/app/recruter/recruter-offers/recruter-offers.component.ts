import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-recruter-offers',
  templateUrl: './recruter-offers.component.html',
  styleUrls: ['./recruter-offers.component.css']
})
export class RecruterOffersComponent implements OnInit { 
  
  offers: Offer[] = [];
  filteredoffers: Offer[] = [];


  constructor (private offerService: OfferService){}

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe(
      response => {
        this.offers = response;
        this.filteredoffers =response;
        console.log('Fetched offers:', this.offers);
      }
    );
  }
  
  filterResults(text: string) {
    console.log('Filtering with text:', text);
    
    if (!text) {
      this.filteredoffers = this.offers;
      return;
    }
  
    this.filteredoffers = this.offers.filter(
      offer => offer?.company_name.toLowerCase().includes(text.toLowerCase())
    );
  
    console.log('Filtered offers:', this.filteredoffers);
  }
}
