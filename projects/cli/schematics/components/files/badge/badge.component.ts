import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

/**
 * ZenBadgeComponent is a versatile Angular component used to display badges or indicators
 * in various positions within its parent container. It allows for flexible placement
 * of badge content such as icons, text, or other elements in the top-left, top,
 * top-right, left, right, bottom-left, bottom, and bottom-right positions.
 *
 * This component offers standalone usage and is highly customizable through its
 * template and styling. It leverages Angular's change detection strategy 'OnPush'
 * for optimal performance.
 *
 * Additionally, it provides support for CSS variables to customize badge positioning
 *
 * ```css
 * --zen-badge-offset: unset; // Controls the overall offset of the badge
 * --zen-badge-offset-x: unset; // Controls the horizontal offset of the badge.
 * --zen-badge-offset-y: unset; // Controls the vertical offset of the badge.
 * ```
 *
 * @example <zen-badge> Text <span bottom>🦆</span></zen-badge>
 *
 * @component
 * @selector `zen-badge`,`[zenBadge]`
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień <kord.stp@gmail.com>
 * @link https://github.com/Kordrad/ng-zen
 */
@Component({
  selector: 'zen-badge,[zenBadge]',
  standalone: true,
  template: `
    <ng-content />
    <ng-content select="[topLeft]" />
    <ng-content select="[top]" />
    <ng-content select="[topRight]" />
    <ng-content select="[left]" />
    <ng-content select="[right]" />
    <ng-content select="[bottomLeft]" />
    <ng-content select="[bottom]" />
    <ng-content select="[bottomRight]" />
  `,
  styleUrl: './badge.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenBadgeComponent {}
