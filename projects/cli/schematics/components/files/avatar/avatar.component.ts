import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';

/**
 * A component to display an avatar image. If a valid image source URL is provided,
 * it will render an image element. Otherwise, it will display projected content.
 *
 * The component uses Angular's optimized image directives for enhanced performance.
 *
 * Usage:
 *
 * ```html
 * <!-- If an image source is provided, it will display the image -->
 * <zen-avatar [src]="'/path/to/image.jpg'" />
 *
 * <!-- If no image source is provided, it will display the projected content -->
 * <zen-avatar> A </zen-avatar>
 * ```
 *
 * @example
 * <zen-avatar src="https://picsum.photos/32" />
 *
 * @component
 * @selector `zen-avatar`
 * @link https://github.com/Kordrad/ng-zen
 */
@Component({
  selector: 'zen-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    @if (src()) {
      <img [ngSrc]="src()" alt="" fill />
    } @else {
      <ng-content />
    }
  `,
  styleUrl: './avatar.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenAvatarComponent {
  /**
   * Path to the image source. If the `src` is provided, an image element will be rendered.
   * Otherwise, the content projected into this component will be displayed.
   *
   * @default ''
   * @input
   * @type string
   */
  readonly src = input<string>('');
}
