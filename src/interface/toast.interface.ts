export enum HintStatus {
    success = 'success', warn = 'warn', error = 'error'
}

export interface HintOptions {
    duration: number;
    // position: ToastPosition
}
export interface HintOptionsWithPosition extends HintOptions {
    // duration: number;
    position?: ToastPosition
}
export interface ToastPosition {
    horizontalPosition: 'left' | 'right' | 'center'
    verticalPosition: 'top' | 'bottom' | 'center'
}