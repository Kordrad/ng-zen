import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zen-button], a[zen-button]',
  standalone: true,
  template: ` <ng-content /> `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenButtonComponent {}
