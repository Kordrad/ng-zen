import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  forwardRef,
  inject,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  ZenDisabledDirective,
  ZenDisabledHostDirective,
} from 'ng-zen/directives/disabled';
import { map } from 'rxjs';

type CheckedState = boolean | 'mixed';
type OnChangeFn = (value: CheckedState) => void;
type OnTouchedFn = () => void;

/**
 * ZenCheckboxComponent is a custom checkbox component implementing ControlValueAccessor.
 * It supports a tri-state checkbox (checked, unchecked, and indeterminate).
 *
 * @example
 * <zen-checkbox />
 *
 * @export
 * @class ZenCheckboxComponent
 * @implements {ControlValueAccessor}
 * @implements {AfterViewInit}
 *
 * @license BSD-2-Clause
 * @author Konrad Stępień
 * @see {https://github.com/Kordrad/ng-zen GitHub Repository}
 */
@Component({
  selector: 'zen-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZenCheckboxComponent),
      multi: true,
    },
  ],
  imports: [FormsModule],
  hostDirectives: [ZenDisabledHostDirective],
})
export class ZenCheckboxComponent
  implements ControlValueAccessor, AfterViewInit
{
  /** Model for the checked state of the checkbox. */
  readonly value = signal<CheckedState>(false);

  /** @ignore */
  readonly zenDisabledDirective = inject(ZenDisabledDirective, { self: true });

  /** @ignore */
  private readonly checked$ = toObservable(this.value);

  /** @ignore */
  private readonly destroyRef = inject(DestroyRef);
  /** @ignore */
  private readonly renderer2 = inject(Renderer2);

  /** @ignore */
  private readonly inputElement =
    viewChild.required<ElementRef<HTMLInputElement>>('inputElement');

  /**
   * Lifecycle hook called after Angular has fully initialized a component's view.
   * Initializes the indeterminate state of the checkbox.
   *
   * @ignore
   */
  ngAfterViewInit(): void {
    this.initIndeterminate();
  }

  private onChange: OnChangeFn = () => {};
  private onTouched: OnTouchedFn = () => {};

  /**
   * Writes a new value to the component.
   */
  writeValue(value: boolean): void {
    this.value.set(value);
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

  /**
   * Toggles the checkbox value and notifies the change.
   * If the component is disabled, no action is performed.
   */
  setValue(): void {
    if (this.zenDisabledDirective.disabledBoolean()) return;

    this.value.update(value => !value);
    this.onChange(this.value());
    this.onTouched();
  }

  /**
   * Initializes the indeterminate state of the checkbox based on the checked state.
   * If the checked state is 'mixed', the checkbox will be set to indeterminate.
   */
  private initIndeterminate(): void {
    this.checked$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((value: CheckedState) => value === 'mixed')
      )
      .subscribe((value: boolean) => {
        this.renderer2.setProperty(
          this.inputElement().nativeElement,
          'indeterminate',
          value
        );
      });
  }
}
