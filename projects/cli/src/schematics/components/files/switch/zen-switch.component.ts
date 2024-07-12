import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  ZenDisabledDirective,
  ZenDisabledHostDirective,
} from 'ng-zen/directives/disabled';

type OnChangeFn = (value: boolean) => void;
type OnTouchedFn = () => void;

/**
 * ZenSwitchComponent is a custom switch component that implements ControlValueAccessor to work seamlessly with Angular forms.
 *
 * @example
 * <zen-switch />
 *
 * @export
 * @class ZenSwitchComponent
 * @implements {ControlValueAccessor}
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień <kord.stp@gmail.com>
 * @see {https://github.com/Kordrad/ng-zen GitHub Repository}
 */
@Component({
  selector: 'zen-switch',
  standalone: true,
  templateUrl: './zen-switch.component.html',
  styleUrl: './zen-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZenSwitchComponent),
      multi: true,
    },
  ],
  imports: [FormsModule],
  hostDirectives: [ZenDisabledHostDirective],
})
export class ZenSwitchComponent implements ControlValueAccessor {
  /** Model for the checked state of the switch. */
  value = signal<boolean>(false);

  /** @ignore */
  readonly zenDisabledDirective = inject(ZenDisabledDirective, { self: true });

  /** @ignore */
  private onChange: OnChangeFn = () => {};
  /** @ignore */
  private onTouched: OnTouchedFn = () => {};

  /**
   * Writes a new value to the component.
   * @ignore
   */
  writeValue(value: boolean): void {
    this.value.set(value);
  }

  /**
   * Registers a function to be called when the value changes.
   * @ignore
   */
  registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  /**
   * Registers a function to be called when the component is touched.
   * @ignore
   */
  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  /**
   * Sets the disabled state of the component.
   * @ignore
   */
  setDisabledState(isDisabled: boolean): void {
    this.zenDisabledDirective.disabled.set(isDisabled);
  }

  /**
   * Toggles the switch value and notifies the change.
   */
  setValue(value?: boolean): void {
    if (this.zenDisabledDirective.disabledBoolean()) return;

    const _value = value ?? !this.value();

    this.value.set(_value);
    this.onChange(_value);
    this.onTouched();
  }

  /**
   * Handles keyboard events for accessibility.
   */
  onKeyDown(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.preventDefault();
        this.setValue();
        break;
      }
      case 'ArrowRight': {
        this.setValue(true);
        break;
      }
      case 'ArrowLeft': {
        this.setValue(false);
        break;
      }
    }
  }
}
