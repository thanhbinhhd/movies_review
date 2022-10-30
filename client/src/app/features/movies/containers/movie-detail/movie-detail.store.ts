import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/movie/domain/movie';

export interface State {
  movie: Movie | null;
}

export const initState: State = {
  movie: null,
};

@Injectable()
export class MovieDetailStore extends ComponentStore<State> {
  constructor() {
    super(initState);
  }

  readonly movie$: Observable<Movie | null> = this.select(
    (state) => state.movie
  );

  readonly setMovie = this.updater((state, movie: Movie | null) => ({
    ...state,
    movie,
  }));
}
