import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruterOffersComponent } from './recruter/recruter-offers/recruter-offers.component';
import { HttpClientModule } from  '@angular/common/http';
import { RecruterViewOfferComponent } from './recruter/recruter-view-offer/recruter-view-offer.component';
import { FormsModule } from '@angular/forms';
import { RecruterAddOfferComponent } from './recruter/recruter-add-offer/recruter-add-offer.component';
import { HomeComponent } from './home/home.component';
import { CandidatViewOfferComponent } from './candidat/candidat-view-offer/candidat-view-offer.component';
import { CandidatOffersComponent } from './candidat/candidat-offers/candidat-offers.component';
import { CandidatAddProfilComponent } from './candidat/candidat-add-profil/candidat-add-profil.component';
import { CandidatViewProfilComponent } from './candidat/candidat-view-profil/candidat-view-profil.component';
import { CandidatAddCandidatureComponent } from './candidat/candidat-add-candidature/candidat-add-candidature.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CandidatCandidaturesComponent } from './candidat/candidat-candidatures/candidat-candidatures.component';
import { RecruterCandidatureComponent } from './recruter/recruter-candidature/recruter-candidature.component';
import { RecruterViewCandidaturesComponent } from './recruter/recruter-view-candidatures/recruter-view-candidatures.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    RecruterOffersComponent,
    RecruterViewOfferComponent,
    RecruterAddOfferComponent,
    CandidatViewOfferComponent,
    CandidatOffersComponent,
    CandidatAddProfilComponent,
    CandidatViewProfilComponent,
    CandidatAddCandidatureComponent,
    LoginComponent,
    SignupComponent,
    CandidatCandidaturesComponent,
    RecruterCandidatureComponent,
    RecruterViewCandidaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
