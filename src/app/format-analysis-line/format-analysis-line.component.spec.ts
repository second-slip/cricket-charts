import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatAnalysisLineComponent } from './format-analysis-line.component';

describe('FormatAnalysisLineComponent', () => {
  let component: FormatAnalysisLineComponent;
  let fixture: ComponentFixture<FormatAnalysisLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatAnalysisLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatAnalysisLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
