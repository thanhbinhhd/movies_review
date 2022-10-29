import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MoviesApi } from '../../../../api/movies';
import { FavoritedMoviesStore } from './favorited-movies.store';

@Injectable()
export class FavoritedMoviesUsecase {
  constructor(
    private readonly movieApi: MoviesApi,
    private readonly store: FavoritedMoviesStore
  ) {}

  async getMovies(): Promise<void> {
    try {
      const movies = await lastValueFrom(this.movieApi.getFavoritedMovies());
      this.store.setMovieList(movies);
    } catch (error) {
      // TODO: redirect to login
      // if (!(error instanceof HttpErrorResponse)) {
      //   return;
      // }
      // if (error.status === 403) {
      // }
    }
  }
}
