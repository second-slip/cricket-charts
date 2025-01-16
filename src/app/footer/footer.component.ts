import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  protected message = signal('');

  constructor() {
    const year = new Date().getFullYear().toString();
    this.message.set(`\u00A9 ${year} Andrew Stuart Cross`);
  }
}