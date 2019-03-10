import { Action, State } from '@ngrx/store';
// import { type } from 'os';
const NAME = '[TASKBAR]'

// export class TaskbarPositionTop implements Action {
//     type = `${NAME}top`;
//     constructor(public payload) { }
// }
// export class TaskbarPositionRight implements Action {
//     type = `${NAME}right`;
//     constructor(public payload) { }
// }
// export class TaskbarPositionBottom implements Action {
//     type = `${NAME}bottom`;
//     constructor(public payload) { }
// }
// export class TaskbarPositionLeft implements Action {
//     type = `${NAME}left`;
//     constructor(public payload) { }
// }
export class TaskbarPosition {
    type = `${NAME}change`
    constructor(public payload: POSITION) { }
}
export type POSITION = 'top' | 'right' | 'bottom' | 'left'
// export type TaskbarPosition = TaskbarPositionTop | TaskbarPositionBottom | TaskbarPositionLeft | TaskbarPositionRight


export function taskbarPosition_Reducer(state, action: TaskbarPosition): POSITION {
    // console.log(state)
    // console.warn(action.type, action.payload)
    switch (action.type) {
        case `${NAME}change`:
            return action.payload
        default:
            break;
    }
    return state
}