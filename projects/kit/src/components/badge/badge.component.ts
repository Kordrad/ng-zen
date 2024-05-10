import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'zen-badge,[zenBadge]',
  standalone: true,
  template: `
    <ng-content select="[topLeft]" />
    <ng-content select="[top]" />
    <ng-content select="[topRight]" />
    <ng-content select="[left]" />
    <ng-content select="[right]" />
    <ng-content select="[bottomLeft]" />
    <ng-content select="[bottom]" />
    <ng-content select="[bottomRight]" />
    <ng-content />
  `,
  styleUrl: './badge.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenBadgeComponent {}
