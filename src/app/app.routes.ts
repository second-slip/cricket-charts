import { Routes } from '@angular/router';
import { IdeasComponent } from './ideas/ideas.component';
import { ChartsAccordionComponent } from './charts-accordion/charts-accordion.component';
import { ChartsStepperComponent } from './charts-stepper/charts-stepper.component';
import { ChartsClassicComponent } from './charts-classic/charts-classic.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ChartsAccordionComponent, pathMatch: 'full' },
  { path: 'home', component: ChartsAccordionComponent, pathMatch: 'full' },
  { path: 'accordion', component: ChartsAccordionComponent, pathMatch: 'full' },
  { path: 'classic', component: ChartsClassicComponent, pathMatch: 'full' },
  { path: 'stepper', component: ChartsStepperComponent, pathMatch: 'full' },
  { path: 'ideas', component: IdeasComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
