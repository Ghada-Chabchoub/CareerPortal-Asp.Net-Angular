import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterAddOfferComponent } from './recruter-add-offer.component';

describe('RecruterAddOfferComponent', () => {
  let component: RecruterAddOfferComponent;
  let fixture: ComponentFixture<RecruterAddOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterAddOfferComponent]
    });
    fixture = TestBed.createComponent(RecruterAddOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
