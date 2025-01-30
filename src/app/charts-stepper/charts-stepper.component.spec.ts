import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsStepperComponent } from './charts-stepper.component';

describe('ChartsStepperComponent', () => {
  let component: ChartsStepperComponent;
  let fixture: ComponentFixture<ChartsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
