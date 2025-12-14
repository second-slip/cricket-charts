import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  // host: {
  //   '(window:resize)': 'onResize($event)',
  // },
  imports: [RouterOutlet, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cricket-charts';
}
