export enum HintStatus {
    success = 'success', warn = 'warn', error = 'error'
}

export interface HintOptions {
    duration: number;
}
export interface ToastPosition {
    horizontalPosition: 'left' | 'right' | 'center'
    verticalPosition: 'top' | 'bottom' | 'center'
}