import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'zen-badge,[zenBadge]',
  standalone: true,
  template: `
    <ng-content select="[topRight]" />
    <ng-content select="[topLeft]" />
    <ng-content select="[bottomRight]" />
    <ng-content select="[bottomLeft]" />
    <ng-content />
  `,
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenBadgeComponent {}
