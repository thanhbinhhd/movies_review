import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import {
  createFeatureSelector,
  createSelector,
  createAction,
  createReducer,
  on,
  Action,
} from '@ngrx/store';

export interface State {
  loggedInState: boolean;
}

export const initState: State = {
  loggedInState: false,
};

const setLoggedInState = createAction('[App Store] set logged in state');
const resetLoggedInState = createAction(
  '[App Store] reset set logged in state'
);
export const actions = {
  setLoggedInState,
  resetLoggedInState,
};

// FIXME: 実は localStorage が不要ですが、@ngrx/store がうまく動けていないから、追加しました
// 後で削除する
const appStoreReducer = createReducer(
  initState,
  on(setLoggedInState, (state) => {
    localStorage.setItem('loggedInState', 'true');
    return { ...state, loggedInState: true };
  }),
  on(resetLoggedInState, (state) => {
    localStorage.removeItem('loggedInState');
    return { ...state, loggedInState: false };
  })
);

export function appReducer(state: State | undefined, action: Action) {
  return appStoreReducer(state, action);
}

export const featureName = 'App';
export const selectAppStore = createFeatureSelector<State>(featureName);
export const selectApp = createSelector(
  selectAppStore,
  // FIXME:テストを追加する
  /* istanbul ignore next */
  (state) =>
    localStorage.getItem('loggedInState') ? true : state.loggedInState
);
