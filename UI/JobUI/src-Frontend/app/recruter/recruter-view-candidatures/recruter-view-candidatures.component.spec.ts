import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterViewCandidaturesComponent } from './recruter-view-candidatures.component';

describe('RecruterViewCandidaturesComponent', () => {
  let component: RecruterViewCandidaturesComponent;
  let fixture: ComponentFixture<RecruterViewCandidaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterViewCandidaturesComponent]
    });
    fixture = TestBed.createComponent(RecruterViewCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
