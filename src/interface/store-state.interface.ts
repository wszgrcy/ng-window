import { WindowPayload } from 'src/interface/window.interface';
import { POSITION } from 'src/ngrx/store/taskbar.store';
import { DesktopSize } from 'src/ngrx/store/desktop.store';

// import { POSITION } from '../store/taskbar.store';

export interface StoreState {
    taskbarPosition: POSITION;
    windowHandle: WindowPayload[];
    desktopSize: DesktopSize;
}
