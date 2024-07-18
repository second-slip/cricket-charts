import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WicketsOpponentBarComponent } from './wickets-opponent-bar.component';

describe('WicketsOpponentBarComponent', () => {
  let component: WicketsOpponentBarComponent;
  let fixture: ComponentFixture<WicketsOpponentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WicketsOpponentBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WicketsOpponentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
