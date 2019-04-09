import { OverlayRef } from '@angular/cdk/overlay';

// export enum WindowHandle {
//     min = 0, max, close, init
// }
export interface WindowPayload {
    icon?: string
    id?: string
    status?: WindowStatus
    overlay?: OverlayRef
    zIndex?: number
}
export enum WindowStatus {
    normal, max, min, close,
}