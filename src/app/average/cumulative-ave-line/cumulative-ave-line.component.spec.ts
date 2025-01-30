import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeAveLineComponent } from './cumulative-ave-line.component';

describe('CumulativeAveLineComponent', () => {
  let component: CumulativeAveLineComponent;
  let fixture: ComponentFixture<CumulativeAveLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumulativeAveLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumulativeAveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
