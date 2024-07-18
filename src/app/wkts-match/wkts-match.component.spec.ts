import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WktsMatchComponent } from './wkts-match.component';

describe('WktsMatchComponent', () => {
  let component: WktsMatchComponent;
  let fixture: ComponentFixture<WktsMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WktsMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WktsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
