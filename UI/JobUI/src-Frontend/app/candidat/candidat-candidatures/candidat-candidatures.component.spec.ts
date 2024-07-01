import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCandidaturesComponent } from './candidat-candidatures.component';

describe('CandidatCandidaturesComponent', () => {
  let component: CandidatCandidaturesComponent;
  let fixture: ComponentFixture<CandidatCandidaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatCandidaturesComponent]
    });
    fixture = TestBed.createComponent(CandidatCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
