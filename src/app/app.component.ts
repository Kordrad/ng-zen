import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitComponent } from '@zen-hubs/ng-zen/lib/kit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KitComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-zen';
}
