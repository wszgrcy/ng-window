// import { Action, State } from '@ngrx/store';
// import { WindowStatus, WindowPayload } from 'src/interface/window.interface';
const NAME = '[DesktopSize]';
export interface DesktopSize {
    width?: number;
    height?: number;
    top?: number | string;
    left?: number | string;
}

// type TYPE = '[DesktopSize]change';
// export class DesktopSizeChange {
//     constructor(public type: TYPE, public payload: DesktopSize) { }
// }



// export function DesktopSizeChange_Reducer(state: DesktopSize, action: DesktopSizeChange): DesktopSize {
//     // console.log(action.type)
//     switch (action.type) {
//         case '[DesktopSize]change':
//             return action.payload;
//         default:
//             break;
//     }
//     return state;
// }
