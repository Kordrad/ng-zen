import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * The `ZenTagComponent` is a reusable UI component designed to display a tag or label.
 * It allows for custom content to be projected inside the tag.
 *
 * ```html
 * <zen-tag>...</zen-tag>
 * ```
 *
 * @example <zen-tag>Simple tag</zen-tag>
 * @component
 * @selector `zen-tag`
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień <kord.stp@gmail.com>
 * @see {https://github.com/Kordrad/ng-zen GitHub Repository}
 */
@Component({
  selector: 'zen-tag',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenTagComponent {}
