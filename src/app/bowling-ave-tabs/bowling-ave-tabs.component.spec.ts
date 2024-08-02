import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingAveTabsComponent } from './bowling-ave-tabs.component';

describe('BowlingAveTabsComponent', () => {
  let component: BowlingAveTabsComponent;
  let fixture: ComponentFixture<BowlingAveTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlingAveTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlingAveTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
