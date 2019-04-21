import { Action, State } from '@ngrx/store';
import { WindowStatus, WindowPayload } from 'src/interface/window.interface';
const NAME = '[WINDOW]'

type TYPE = '[WINDOW]min' | '[WINDOW]restore' | '[WINDOW]max' | '[WINDOW]onclose' | '[WINDOW]closed' | '[WINDOW]init' | '[WINDOW]move' | '[WINDOW]click'
export class WindowHandle {
    constructor(public type: TYPE, public payload: WindowPayload) { }
}



export function WindowHandle_Reducer(state: WindowPayload[] = [], action: WindowHandle): any {
    switch (action.type) {
        case '[WINDOW]init':
            action.payload.zIndex = state.length
            // console.log(action.payload)
            return [...state, action.payload].sort((a, b) => b.id === a.id ? 1 : a.zIndex - b.zIndex).map((value, i) => ({ ...value, zIndex: action.payload.id === value.id ? state.length : i }))
        case '[WINDOW]min':
            //todo 查找某一个图标,更改为最小化(或者还原)
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.min
            })
            return [...state]
        case '[WINDOW]restore':
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.normal
            })
            return [...state]
        case '[WINDOW]max':
            //todo 查找某一个图标,更改为最最大化(或者还原)
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.max
            })
            return [...state]
        //doc 准备关闭
        case '[WINDOW]onclose':
            state.filter(({ id }) => id == action.payload.id).forEach((value) => {
                value.status = WindowStatus.close
            })
            return [...state]
        case '[WINDOW]closed':
            return state.filter(({ id }) => id != action.payload.id)
        case '[WINDOW]move':
            return state.sort((a, b) => b.id === a.id ? 1 : a.zIndex - b.zIndex).map((value, i) => ({ ...value, zIndex: action.payload.id === value.id ? state.length : i }))
        case '[WINDOW]click':
            return state.sort((a, b) => b.id === a.id ? 1 : a.zIndex - b.zIndex).map((value, i) => ({ ...value, zIndex: action.payload.id === value.id ? state.length : i }))
        default:
            break;
    }
    return state
}

