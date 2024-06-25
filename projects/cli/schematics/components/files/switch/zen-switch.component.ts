import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  model,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

type OnChangeFn = (value: boolean) => void;
type OnTouchedFn = () => void;

/**
 * ZenSwitchComponent is a custom switch component that implements ControlValueAccessor to work seamlessly with Angular forms.
 *
 * @example <zen-switch />
 *
 * @export
 * @class ZenSwitchComponent
 * @implements {ControlValueAccessor}
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień <kord.stp@gmail.com>
 * @link https://github.com/Kordrad/ng-zen
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
  imports: [FormsModule, NgIf],
})
export class ZenSwitchComponent implements ControlValueAccessor {
  /** Model for the checked state of the switch. */
  checked = model<boolean>(false);

  /** Model for the disabled state of the switch. */
  disabled = model<boolean>(false);

  /** @ignore */
  private onChange: OnChangeFn = () => {};
  /** @ignore */
  private onTouched: OnTouchedFn = () => {};

  /**
   * Writes a new value to the component.
   * @ignore
   */
  writeValue(value: boolean): void {
    this.checked.set(value);
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
    this.disabled.set(isDisabled);
  }

  /**
   * Toggles the switch value and notifies the change.
   */
  onToggle(check?: boolean): void {
    if (this.disabled()) return;

    const value = check ?? !this.checked();

    this.checked.set(value);
    this.onChange(value);
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
        this.onToggle();
        break;
      }
      case 'ArrowRight': {
        this.onToggle(true);
        break;
      }
      case 'ArrowLeft': {
        this.onToggle(false);
        break;
      }
    }
  }
}
