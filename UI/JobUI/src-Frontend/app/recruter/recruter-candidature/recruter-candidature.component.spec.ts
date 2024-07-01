import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterCandidatureComponent } from './recruter-candidature.component';

describe('RecruterCandidatureComponent', () => {
  let component: RecruterCandidatureComponent;
  let fixture: ComponentFixture<RecruterCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterCandidatureComponent]
    });
    fixture = TestBed.createComponent(RecruterCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
