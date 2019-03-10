import { Action, State } from '@ngrx/store';
import { WindowStatus, WindowPayload } from 'src/interface/window.interface';
const NAME = '[WINDOW]'

type TYPE = '[WINDOW]min' | '[WINDOW]restore' | '[WINDOW]max' | '[WINDOW]onclose' | '[WINDOW]closed' | '[WINDOW]init'
export class WindowHandle {
    constructor(public type: TYPE, public payload: WindowPayload) { }
}



export function WindowHandle_Reducer(state: WindowPayload[] = [], action: WindowHandle): any {
    // console.log(action.type)
    switch (action.type) {
        case '[WINDOW]init':
            console.log(state, action)
            return [...state, action.payload]
        case '[WINDOW]min':
            //todo 查找某一个图标,更改为最小化(或者还原)
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.min
            })
            // return state.map((payload) => payload)
            return [...state]
        case '[WINDOW]restore':
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.normal
            })
            console.log(state)
            return [...state]
        case '[WINDOW]max':
            //todo 查找某一个图标,更改为最最大化(或者还原)
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.max
            })
            return [...state]
        case '[WINDOW]onclose':
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.close
            })
            return [...state]
        case '[WINDOW]closed':
            console.log(action.payload, state)
            //todo 移除图标,
            return state.filter(({ id }) => id != action.payload.id)
        default:
            break;
    }
    return state
}