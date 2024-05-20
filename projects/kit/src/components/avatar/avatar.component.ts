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
 * @example
 * ```html
 * <zen-avatar [src]="'/path/to/image.jpg'" />
 * ```
 * If an image source is provided, it will display the image:
 * ```html
 * <zen-avatar src="/assets/avatar.png"/>
 * ```
 * If no image source is provided, it will display the projected content:
 * ```html
 * <zen-avatar>
 *   <div class="default-avatar">A</div>
 * </zen-avatar>
 * ```
 *
 * @component
 * @selector `zen-avatar`
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
   */
  readonly src = input<string>('');
}
