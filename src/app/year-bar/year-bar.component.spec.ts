import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearBarComponent } from './year-bar.component';

describe('YearBarComponent', () => {
  let component: YearBarComponent;
  let fixture: ComponentFixture<YearBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
