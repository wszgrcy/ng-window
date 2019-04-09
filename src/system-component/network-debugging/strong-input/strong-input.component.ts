import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy, Query } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QueryType } from '@ngrx/store/intereptor.store';
import { PROPERTYTYPE_OPTIONS } from 'src/const/interceptor.const';

@Component({
  selector: 'app-strong-input',
  templateUrl: './strong-input.component.html',
  styleUrls: ['./strong-input.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StrongInputComponent), multi: true }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrongInputComponent implements OnInit, ControlValueAccessor {
  @Input() propertyTypeOptions: (keyof QueryType)[] = PROPERTYTYPE_OPTIONS
  @Input() typeName: string
  @Input() valueName: string
  @Input() placeholder: string = '输入值'
  _type: keyof QueryType = null;
  _value: QueryType[keyof QueryType]
  get type() {
    return this._type
  }
  set type(value) {
    this._type = value
    this.initValue()
    this.valueChange({ [this.typeName]: this.type, [this.valueName]: this.value })
  }
  get value() {
    return this._value
  }
  set value(value) {
    this._value = value
    this.valueChange({ [this.typeName]: this.type, [this.valueName]: this.value })
  }
  private changeFn: Function = () => { };
  private touchedFn: Function = () => { };
  objectValue
  constructor() { }

  ngOnInit() { }
  writeValue(value) {
    if (value !== undefined && value !== null) {
      ({ [this.typeName]: this._type, [this.valueName]: this._value } = value)
      this.objectValue = value
    }
  }
  registerOnChange(fn) {
    this.changeFn = fn;
  }
  registerOnTouched(fn) {
    this.touchedFn = fn;
  }
  /**
   *
   * @author cyia
   * @date 2019-04-06
   * @param value
   * @memberof StrongInputComponent
   */
  valueChange(value) {

    this.changeFn(Object.assign(this.objectValue, value))
    this.touchedFn(Object.assign(this.objectValue, value))
  }

  initValue() {
    switch (this._type) {
      case 'boolean':
        this._value = false
        break;
      case 'number':
        this._value = 0;
        break
      case 'regexp':
        if (typeof this._value !== 'string') this._value = ''
        break;
      case 'string':
        if (typeof this._value !== 'string') this._value = ''
        break;
    }
  }
}
