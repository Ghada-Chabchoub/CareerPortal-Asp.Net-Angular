import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatAddProfilComponent } from './candidat-add-profil.component';

describe('CandidatAddProfilComponent', () => {
  let component: CandidatAddProfilComponent;
  let fixture: ComponentFixture<CandidatAddProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatAddProfilComponent]
    });
    fixture = TestBed.createComponent(CandidatAddProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
