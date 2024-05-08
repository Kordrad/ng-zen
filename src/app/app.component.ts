import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZenBadgeComponent } from '@ng-zen/kit/components';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZenBadgeComponent, NgOptimizedImage],
  styles: [
    `
      img {
        border-radius: 8px;
      }
    `,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-zen';
}
