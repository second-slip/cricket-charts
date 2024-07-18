import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyRateComponent } from './economy-rate.component';

describe('EconomyRateComponent', () => {
  let component: EconomyRateComponent;
  let fixture: ComponentFixture<EconomyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomyRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
