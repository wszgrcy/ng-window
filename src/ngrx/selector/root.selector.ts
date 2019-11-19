import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectInterceptorConfig = createSelector(
    createFeatureSelector('intercept'),
    (state) => {
        console.warn('选择拦截器配置', state);
        return state;
    }
);
