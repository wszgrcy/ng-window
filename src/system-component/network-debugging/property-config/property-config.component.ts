import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ALLOW_PROPERTY_OBJECT, DISABLE_TYPE_OBJECT, DISABLE_TYPE_PROPERTY_OBJECT, PROPERTYTYPE_OPTIONS } from '../../../const/interceptor.const';
import { ArrayAction } from 'src/interface/common.interface';
import { RequestProperty, InterceptorItem } from '@ngrx/store/intereptor.store';

@Component({
  selector: 'app-property-config',
  templateUrl: './property-config.component.html',
  styleUrls: ['./property-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyConfigComponent implements OnInit {
  @Input() item
  /**用于操作的方法,查询,新增,修改,删除 */
  @Input() readonly operate: keyof InterceptorItem['requestConfig']
  readonly ALLOW_PROPERTY_OBJECT = ALLOW_PROPERTY_OBJECT
  constructor() { }
  @Output() delete = new EventEmitter()
  ngOnInit() {
  }

  /**
   * 数组操作
   *
   * @author cyia
   * @date 2019-04-10
   * @param array
   * @param action
   * @param [index=null]
   * @param [value=null]
   * @memberof PropertyConfigComponent
   */
  arrayAction(array: Array<any>, action: ArrayAction, index: number = null, value: any = null) {
    switch (action) {
      case 'add':
        array.push(JSON.parse(JSON.stringify(value)))
        break;
      case 'remove':
        array.splice(index, 1)
        break;
      default:
        break;
    }
  }

  strongType(disableTypeName: 'key' | 'value' | 'change', disableTypePropertyName: keyof RequestProperty<any>) {
    let disableTypeOptions = DISABLE_TYPE_OBJECT[disableTypeName] || [], disableTypePropertyOptions = DISABLE_TYPE_PROPERTY_OBJECT[disableTypePropertyName] || []

    let disableOptions = [...new Set([...disableTypeOptions, ...disableTypePropertyOptions])]
    return PROPERTYTYPE_OPTIONS.filter((value) => !disableOptions.some((option) => option == value))
  }
  displayField(fieldName: 'key' | 'value' | 'change') {
    return {
      delete: ['key'],
      retrieve: ['key', 'value'],
      update: ['key', 'change'],
      create: ['key', 'change']
    }[this.operate].some((val) => val === fieldName)
  }
}
