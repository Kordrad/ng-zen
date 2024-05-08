import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZenBadgeComponent } from '@ng-zen/kit/components';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [ZenBadgeComponent, NgOptimizedImage],
  templateUrl: './badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}
