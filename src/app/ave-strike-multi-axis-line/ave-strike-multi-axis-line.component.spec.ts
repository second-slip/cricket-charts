import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveStrikeMultiAxisLineComponent } from './ave-strike-multi-axis-line.component';

describe('AveStrikeMultiAxisLineComponent', () => {
  let component: AveStrikeMultiAxisLineComponent;
  let fixture: ComponentFixture<AveStrikeMultiAxisLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveStrikeMultiAxisLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveStrikeMultiAxisLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
