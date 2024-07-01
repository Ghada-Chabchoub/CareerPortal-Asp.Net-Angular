import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterViewOfferComponent } from './recruter-view-offer.component';

describe('RecruterViewOfferComponent', () => {
  let component: RecruterViewOfferComponent;
  let fixture: ComponentFixture<RecruterViewOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterViewOfferComponent]
    });
    fixture = TestBed.createComponent(RecruterViewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
