import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsClassicComponent } from './charts-classic.component';

describe('ChartsClassicComponent', () => {
  let component: ChartsClassicComponent;
  let fixture: ComponentFixture<ChartsClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
