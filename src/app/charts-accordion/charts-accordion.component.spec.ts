import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAccordionComponent } from './charts-accordion.component';

describe('ChartsAccordionComponent', () => {
  let component: ChartsAccordionComponent;
  let fixture: ComponentFixture<ChartsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
