import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeRateComponent } from './strike-rate.component';

describe('StrikeRateComponent', () => {
  let component: StrikeRateComponent;
  let fixture: ComponentFixture<StrikeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrikeRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrikeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
