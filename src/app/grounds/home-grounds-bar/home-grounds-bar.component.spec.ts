import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGroundsBarComponent } from './home-grounds-bar.component';

describe('HomeGroundsBarComponent', () => {
  let component: HomeGroundsBarComponent;
  let fixture: ComponentFixture<HomeGroundsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGroundsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGroundsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
