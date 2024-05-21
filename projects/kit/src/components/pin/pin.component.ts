import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

import type { BooleanAttribute } from '../../types';

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
export class ZenPinComponent {
  /**
   * Displays waving stream animation
   */
  readonly stream = input<boolean, BooleanAttribute>(false, {
    transform: booleanAttribute,
  });

  @HostBinding('class.stream')
  get classStream() {
    return this.stream();
  }
}
