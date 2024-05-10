import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZenBadgeComponent } from '@ng-zen/kit/components';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [ZenBadgeComponent, NgOptimizedImage],
  templateUrl: './badge.component.html',
  styleUrl: 'badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}
