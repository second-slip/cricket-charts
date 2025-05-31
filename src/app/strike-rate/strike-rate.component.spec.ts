import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeRateComponent } from './strike-rate.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('StrikeRateComponent', () => {
  let component: StrikeRateComponent;
  let fixture: ComponentFixture<StrikeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrikeRateComponent],
      providers: [provideZonelessChangeDetection()]
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
