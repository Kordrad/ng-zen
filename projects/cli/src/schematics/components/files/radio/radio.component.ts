import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ZenDisabledDirective,
  ZenHostDirective,
} from 'ng-zen/directives/disabled';

type OnChangeFn = (value: boolean) => void;
type OnTouchedFn = () => void;

@Component({
  selector: 'zen-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZenRadioComponent),
      multi: true,
    },
  ],
  hostDirectives: [ZenHostDirective],
})
export class ZenRadioComponent implements ControlValueAccessor {
  readonly name = input.required<string>();
  readonly id = input<string | undefined>();

  /** Model for the checked state of the checkbox. */
  readonly checked = model<boolean>(false);

  /** @ignore */
  readonly zenDisabledDirective = inject(ZenDisabledDirective, { self: true });

  private onChange: OnChangeFn = () => {};
  private onTouched: OnTouchedFn = () => {};

  /**
   * Writes a new value to the component.
   */
  writeValue(value: boolean): void {
    this.checked.set(value);
  }

  /**
   * Registers a function to be called when the value changes.
   */
  registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  /**
   * Registers a function to be called when the component is touched.
   */
  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  /**
   * Sets the disabled state of the component.
   */
  setDisabledState(isDisabled: boolean): void {
    this.zenDisabledDirective.disabled.set(isDisabled);
  }
}
