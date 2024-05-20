import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

/**
 * The ZenPinComponent represents a simple visual pin with a circular shape.
 *
 * @example
 * ```html
 * <zen-pin />
 * ```
 *
 * @component
 * @selector `zen-pin`
 */
@Component({
  selector: 'zen-pin',
  standalone: true,
  imports: [],
  template: ``,
  styleUrl: './pin.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenPinComponent {}
