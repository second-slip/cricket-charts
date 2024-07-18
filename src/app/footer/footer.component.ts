import { Component, signal } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
import { AngularLogoComponent } from '../angular-logo/angular-logo.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [AngularLogoComponent]
})
export class FooterComponent {
  public message = signal('');

  constructor() {
    const year = new Date().getFullYear().toString();
    this.message.set(`\u00A9 ${year} Andrew Stuart Cross`);
  }
}