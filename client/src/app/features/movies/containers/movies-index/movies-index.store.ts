import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MoviePreview } from 'src/app/shared/movie/domain/movie';

export interface State {
  moviesList: MoviePreview[];
}

export const initState: State = {
  moviesList: [],
};

@Injectable()
export class MoviesIndexStore extends ComponentStore<State> {
  constructor() {
    super(initState);
  }

  readonly moviesList$: Observable<MoviePreview[]> = this.select(
    (state) => state.moviesList
  );

  readonly setMovieList = this.updater((state, moviesList: MoviePreview[]) => ({
    ...state,
    moviesList,
  }));
}
