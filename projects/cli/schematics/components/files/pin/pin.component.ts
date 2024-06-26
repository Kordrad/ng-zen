import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

/**
 * The ZenPinComponent represents a simple visual pin with a circular shape.
 *
 * ```html
 * <zen-pin />
 * ```
 *
 * @example <zen-pin />
 * @component
 * @selector `zen-pin`
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień <kord.stp@gmail.com>
 * @link https://github.com/Kordrad/ng-zen
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
  readonly stream = input<boolean, boolean | 'true' | 'false' | ''>(false, {
    transform: booleanAttribute,
  });

  @HostBinding('class.stream')
  get classStream() {
    return this.stream();
  }
}
