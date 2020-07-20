import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'lib-name-selector',
  templateUrl: './name-selector.component.html',
  styleUrls: ['./name-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NameSelectorComponent,
      multi: true,
    },
  ],
})
export class NameSelectorComponent implements ControlValueAccessor {

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  constructor(private controlContainer: ControlContainer) {}

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

}
