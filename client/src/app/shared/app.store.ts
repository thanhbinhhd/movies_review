import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/movie/domain/movie';

export interface State {
  currentUser: string | null;
}

export const initState: State = {
  currentUser: null,
};

@Injectable()
export class AppGlobalStore extends ComponentStore<State> {
  constructor() {
    super(initState);
  }

  readonly currentUser$: Observable<string | null> = this.select(
    (state) => state.currentUser
  );

  readonly setCurrentUser = this.updater(
    (state, currentUser: string | null) => ({
      ...state,
      currentUser,
    })
  );
}
