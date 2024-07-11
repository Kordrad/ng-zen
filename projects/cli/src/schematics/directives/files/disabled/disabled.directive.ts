import { computed, Directive, HostBinding, model } from '@angular/core';

/**
 * @example
 * <button zenDisabled> ... </button>
 *
 * @export
 * @class ZenDisabledDirective
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień
 * @see {https://github.com/Kordrad/ng-zen GitHub Repository}
 * */
@Directive({
  selector: '[zenDisabled]',
  standalone: true,
})
export class ZenDisabledDirective {
  /** Model for the disabled state of the checkbox. */
  readonly disabled = model<boolean | 'true' | 'false' | ''>(false, {
    alias: 'zenDisabled',
  });

  /** @ignore */
  readonly disabledBoolean = computed(() =>
    [true, 'true', ''].includes(this.disabled())
  );

  @HostBinding('disabled')
  get disabledAttr(): string | null | boolean {
    return this.disabledBoolean() || null;
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabledAttr(): boolean {
    return this.disabledBoolean();
  }

  @HostBinding('class.zen-disabled')
  get disabledClass(): boolean {
    return this.disabledBoolean();
  }
}
