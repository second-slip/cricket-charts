import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAwayTabsComponent } from './home-away-tabs.component';

describe('HomeAwayTabsComponent', () => {
  let component: HomeAwayTabsComponent;
  let fixture: ComponentFixture<HomeAwayTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAwayTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAwayTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
