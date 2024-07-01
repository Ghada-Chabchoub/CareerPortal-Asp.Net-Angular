import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';
import { UpdateOfferRequest } from 'src/app/models/update-offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-recruter-view-offer',
  templateUrl: './recruter-view-offer.component.html',
  styleUrls: ['./recruter-view-offer.component.css']
})
export class RecruterViewOfferComponent implements OnInit {

  constructor( private route: ActivatedRoute, private offerService: OfferService ){}
  offer : Offer | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      params => {
        const id = params.get('id');
 
        if(id) {
          this.offerService.getOfferById(id)
          .subscribe(
            response => {
              this.offer = response;
            }
          )

        }
      }
    );

      
  }

  onSubmit(): void{
    const updateOfferRequest:UpdateOfferRequest = {
      title : this.offer?.title,
      location : this.offer?.location,
      min_salary : this.offer?.min_salary,
      max_salary : this.offer?.max_salary,
      imageurl : this.offer?.imageurl,
      category : this.offer?.category,
      job_nature : this.offer?.job_nature,
      job_location : this.offer?.job_location,
      company_name : this.offer?.company_name,
      description : this.offer?.description,
      visible : this.offer?.visible,
      archivee : this.offer?.archivee,
      author : this.offer?.author,
      publishDate : this.offer?.publishDate,
      updateDate : this.offer?.updateDate,
    }
    this.offerService.updateOffer(this.offer?.id,updateOfferRequest)
    .subscribe(
      response =>{
        alert('success');
      }
    );
  }

  deleteOffer() : void{
    this.offerService.deleteOffer(this.offer?.id)
    .subscribe(
      response => {
        alert("Deleted successfully");
      }
    );
  }
}
