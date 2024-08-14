import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundsTabsComponent } from './grounds-tabs.component';

describe('GroundsTabsComponent', () => {
  let component: GroundsTabsComponent;
  let fixture: ComponentFixture<GroundsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroundsTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
