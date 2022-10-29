import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MoviesApi } from '../../../../api/movies';
import { MoviesListStore } from './movies-list.store';

@Injectable()
export class MoviesListUsecase {
  constructor(
    private readonly movieApi: MoviesApi,
    private readonly store: MoviesListStore
  ) {}

  async getMovies(): Promise<void> {
    try {
      const movies = await lastValueFrom(this.movieApi.getMoviesList());
      this.store.setMovieList(movies);
    } catch (e) {}
  }
}
