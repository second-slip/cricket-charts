import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveHomeAwayComponent } from './ave-home-away.component';

describe('AveHomeAwayComponent', () => {
  let component: AveHomeAwayComponent;
  let fixture: ComponentFixture<AveHomeAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveHomeAwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveHomeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
