import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZenBadgeComponent } from '@ng-zen/kit/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZenBadgeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-zen';
}
