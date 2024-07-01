import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatViewProfilComponent } from './candidat-view-profil.component';

describe('CandidatViewProfilComponent', () => {
  let component: CandidatViewProfilComponent;
  let fixture: ComponentFixture<CandidatViewProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatViewProfilComponent]
    });
    fixture = TestBed.createComponent(CandidatViewProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
