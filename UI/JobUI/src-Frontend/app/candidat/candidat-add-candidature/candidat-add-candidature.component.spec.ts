import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatAddCandidatureComponent } from './candidat-add-candidature.component';

describe('CandidatAddCandidatureComponent', () => {
  let component: CandidatAddCandidatureComponent;
  let fixture: ComponentFixture<CandidatAddCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatAddCandidatureComponent]
    });
    fixture = TestBed.createComponent(CandidatAddCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
