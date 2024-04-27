import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { TypeofPipe } from './typeof.pipe';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[zenBadge]',
  standalone: true,
  imports: [TypeofPipe, NgTemplateOutlet],
  templateUrl: './badge.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZenBadgeComponent {
  readonly badge: InputSignal<
    number | string | boolean | TemplateRef<unknown>
  > = input.required({
    alias: 'zenBadge',
  });
  readonly badgeTemplate = computed<TemplateRef<unknown> | null>(() => {
    if (!['string', 'number', 'boolean'].includes(typeof this.badge())) {
      return this.badge() as TemplateRef<unknown>;
    }
    return null;
  });
}
