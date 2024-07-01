import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruterOffersComponent } from './recruter/recruter-offers/recruter-offers.component';
import { RecruterViewOfferComponent } from './recruter/recruter-view-offer/recruter-view-offer.component';
import { RecruterAddOfferComponent } from './recruter/recruter-add-offer/recruter-add-offer.component';
import { HomeComponent } from './home/home.component';
import { CandidatOffersComponent } from './candidat/candidat-offers/candidat-offers.component';
import { CandidatViewOfferComponent } from './candidat/candidat-view-offer/candidat-view-offer.component';
import { CandidatAddProfilComponent } from './candidat/candidat-add-profil/candidat-add-profil.component';
import { CandidatViewProfilComponent } from './candidat/candidat-view-profil/candidat-view-profil.component';
import { CandidatAddCandidatureComponent } from './candidat/candidat-add-candidature/candidat-add-candidature.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CandidatCandidaturesComponent } from './candidat/candidat-candidatures/candidat-candidatures.component';
import { RecruterCandidatureComponent } from './recruter/recruter-candidature/recruter-candidature.component';
import { RecruterViewCandidaturesComponent } from './recruter/recruter-view-candidatures/recruter-view-candidatures.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'recruter/offers',
    component: RecruterOffersComponent
  },
  {
    path:'recruter/offers/add',
    component: RecruterAddOfferComponent
  },

  {
    path:'recruter/offers/:id',
    component: RecruterViewOfferComponent
  },
  {
    path:'recruter/candidatures',
    component: RecruterCandidatureComponent
  },
  {
    path:'candidat/offers',
    component: CandidatOffersComponent
  },
  {
    path:'candidat/offers/:id',
    component: CandidatViewOfferComponent
  },
  {
    path:'candidat/profil/add',
    component: CandidatAddProfilComponent
  },
  {
    path:'candidat/candidature',
    component: CandidatCandidaturesComponent
  },
  {
    path:'recruter/candidature/:id',
    component: RecruterViewCandidaturesComponent
  },
  {
    path:'candidat/candidature',
    component: CandidatCandidaturesComponent
  },

  { path: 'candidat/candidature/add/:id/:profil_id', component: CandidatAddCandidatureComponent },
  {
    path:'candidat/profil/:id',
    component: CandidatViewProfilComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
