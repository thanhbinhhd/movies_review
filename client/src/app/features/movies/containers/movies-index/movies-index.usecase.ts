import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FavoritesApi } from 'src/app/api/favorites';
import { MoviesApi } from '../../../../api/movies';
import { MoviesIndexStore } from './movies-index.store';

@Injectable()
export class MoviesIndexUsecase {
  constructor(
    private readonly movieApi: MoviesApi,
    private readonly favoritesApi: FavoritesApi,
    private readonly store: MoviesIndexStore
  ) {}

  async getMovies(): Promise<void> {
    try {
      const movies = await lastValueFrom(this.movieApi.getMoviesList());
      this.store.setMovieList(movies);
    } catch (e) {}
  }

  async searchMovies(searchKey: string): Promise<void> {
    try {
      const movies = await lastValueFrom(this.movieApi.searchMovies(searchKey));
      this.store.setMovieList(movies);
    } catch (e) {}
  }

  async addFavorite(movieId: number): Promise<void> {
    try {
      const movies = await lastValueFrom(
        this.favoritesApi.addFavorite(movieId)
      );
    } catch (e) {}
  }
}
