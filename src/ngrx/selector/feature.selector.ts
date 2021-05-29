import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from 'src/interface/store-state.interface';
import { WindowStatus } from 'src/interface/window.interface';

const featureReduce = createFeatureSelector('main');
// export const selectTaskbarPosition = createSelector(featureReduce,
//     (state: StoreState) => {
//         // console.log(state)
//         return state.taskbarPosition;
//     }

// );
// export const selectWindowHandle = createSelector(
//     featureReduce,
//     (state: StoreState) => state.windowHandle,
// );
// export const selectWindowHandleStatusById = createSelector(
//     featureReduce,
//     (state: StoreState, selectId) => {
//         if (!state.windowHandle) { return undefined; }
//         return (state.windowHandle.find(({ id }) => id == selectId) || {}).status;
//     }
// );
// export const selectWindowHandleCloseById = createSelector(
//     featureReduce,
//     (state: StoreState) => {
//         // console.log(state)
//         if (!state.windowHandle) { return undefined; }
//         const list = (state.windowHandle.filter(({ status }) => status == WindowStatus.close));
//         return list;
//     }
// );

// export const selectDesktopSize = createSelector(
//     featureReduce,
//     (state: StoreState) => state.desktopSize,
// );
// export const selectWindowZIndex = createSelector(
//     featureReduce,
//     (state: StoreState, selectId) => {
//         if (!state.windowHandle) { return undefined; }
//         const item = state.windowHandle.find(({ id }) => id === selectId) || {};
//         return {
//             overlay: item.overlay,
//             zIndex: item.zIndex,
//             isActive: item.zIndex === state.windowHandle.length
//         };
//     }
// );
