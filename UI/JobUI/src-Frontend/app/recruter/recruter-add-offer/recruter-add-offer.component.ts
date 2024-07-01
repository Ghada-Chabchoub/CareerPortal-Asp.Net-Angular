import { Component, OnInit } from '@angular/core';
import { AddOfferRequest } from 'src/app/models/add-offer.model';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-recruter-add-offer',
  templateUrl: './recruter-add-offer.component.html',
  styleUrls: ['./recruter-add-offer.component.css']
})
export class RecruterAddOfferComponent implements OnInit{

  constructor(private offerService: OfferService){}

  offer : AddOfferRequest = {
    title : '',
    location : '',
    min_salary : '',
    max_salary : '',
    imageurl : '',
    category : '',
    job_nature : '',
    job_location : '',
    company_name : '',
    description : '',
    visible : true,
    archivee : false,
    author : '',
    publishDate : '',
    updateDate : ''
  }
  ngOnInit(): void {   
  }

  onSubmit(){

    this.offerService.addOffer(this.offer)
    .subscribe(
      response => {
        alert("Success");
      }
    );
  }
}
