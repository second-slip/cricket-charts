import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallScreenInfoComponent } from './small-screen-info.component';

describe('SmallScreenInfoComponent', () => {
  let component: SmallScreenInfoComponent;
  let fixture: ComponentFixture<SmallScreenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallScreenInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallScreenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
