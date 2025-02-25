import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-small-screen-info',
  imports: [MatIconModule],
  host: { class: 'alert alert-info small-screen-info' },
  templateUrl: './small-screen-info.component.html'
})
export class SmallScreenInfoComponent {}