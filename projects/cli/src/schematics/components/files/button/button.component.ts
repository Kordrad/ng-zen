import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZenDisabledHostDirective } from 'ng-zen/directives/disabled';

/**
 * ZenButtonComponent is a reusable button component designed to provide
 * a consistent and customizable button style across the application.
 * It can be used with both `<button>` and `<a>` HTML elements by applying
 * the `zen-button` attribute.
 *
 * @example
 * <button zen-button> ... </button>
 *
 * @export
 * @class ZenButtonComponent
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień
 * @see {https://github.com/Kordrad/ng-zen GitHub Repository}
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zen-button], a[zen-button]',
  standalone: true,
  template: ` <ng-content /> `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ZenDisabledHostDirective],
})
export class ZenButtonComponent {}
