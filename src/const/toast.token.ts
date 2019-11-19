import { InjectionToken } from '@angular/core';
import { ToastPosition } from 'src/interface/toast.interface';

export const HINT_DATA = new InjectionToken('hint-data');
export const TOAST_POSITION = new InjectionToken<ToastPosition>('toast-position');
