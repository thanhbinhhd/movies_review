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

const appStoreReducer = createReducer(
  initState,
  on(setLoggedInState, (state) => ({ ...state, loggedInState: true })),
  on(resetLoggedInState, (state) => ({ ...state, loggedInState: false }))
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
  (state) => state.loggedInState
);
