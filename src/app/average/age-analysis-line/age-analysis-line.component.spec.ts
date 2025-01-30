import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeAnalysisLineComponent } from './age-analysis-line.component';

describe('AgeAnalysisLineComponent', () => {
  let component: AgeAnalysisLineComponent;
  let fixture: ComponentFixture<AgeAnalysisLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeAnalysisLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeAnalysisLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
