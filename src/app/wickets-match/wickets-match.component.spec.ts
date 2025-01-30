import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WicketsMatchComponent } from './wickets-match.component';

describe('WicketsMatchComponent', () => {
  let component: WicketsMatchComponent;
  let fixture: ComponentFixture<WicketsMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WicketsMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WicketsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
