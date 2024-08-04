import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InningsBarComponent } from './innings-bar.component';

describe('InningsBarComponent', () => {
  let component: InningsBarComponent;
  let fixture: ComponentFixture<InningsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InningsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InningsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
