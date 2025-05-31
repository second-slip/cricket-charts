import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'top'})),
  provideCharts(withDefaultRegisterables()),
  provideZonelessChangeDetection(),
  provideAnimationsAsync()]
};
