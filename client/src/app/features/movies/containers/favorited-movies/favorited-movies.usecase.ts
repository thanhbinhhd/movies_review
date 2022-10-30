import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FavoritesApi } from 'src/app/api/favorites';
import { MoviesApi } from '../../../../api/movies';
import { FavoritedMoviesStore } from './favorited-movies.store';

@Injectable()
export class FavoritedMoviesUsecase {
  constructor(
    private readonly movieApi: MoviesApi,
    private readonly store: FavoritedMoviesStore,
    private readonly favoritesApi: FavoritesApi
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

  async addFavorite(movieId: number): Promise<void> {
    try {
      await lastValueFrom(this.favoritesApi.addFavorite(movieId));
    } catch (e) {}
  }
}
