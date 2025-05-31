import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
// import { MatButtonHarness } from '@angular/material/button/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    // loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render GitHub button', async () => {
  //   const buttons = await loader.getAllHarnesses(MatButtonHarness);
  //   expect(buttons.length).toBe(2);
  // });

  // it('should render an active GitHub icon button', async () => {
  //   const gitHubIconButton = await loader.getHarness(MatButtonHarness.with({ selector: '.github-icon-button' }));
  //   expect(await gitHubIconButton.isDisabled()).toBe(false);
  // });

  // it('should render an active LinkedIn icon button', async () => {
  //   const linkedInIconButton = await loader.getHarness(MatButtonHarness.with({ selector: '.linkedin-icon-button' }));
  //   expect(await linkedInIconButton.isDisabled()).toBe(false);
  // });

  it('should set the year property to current year', () => {
    // Arrange
    const year = new Date().getFullYear().toString();
    const expected = `\u00A9 ${year} Andrew Stuart Cross`;

    // Act or change
    fixture.detectChanges();

    // Assert
    // expect(component.message()).toEqual(expected);

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.content')?.textContent).toContain(expected);
  });
});
