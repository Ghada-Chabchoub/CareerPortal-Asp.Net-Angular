import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatViewOfferComponent } from './candidat-view-offer.component';

describe('CandidatViewOfferComponent', () => {
  let component: CandidatViewOfferComponent;
  let fixture: ComponentFixture<CandidatViewOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatViewOfferComponent]
    });
    fixture = TestBed.createComponent(CandidatViewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
