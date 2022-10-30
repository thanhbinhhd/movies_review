import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MoviesApi } from '../../../../api/movies';
import { MovieDetailStore } from './movie-detail.store';

@Injectable()
export class MovieDetailUsecase {
  constructor(
    private readonly movieApi: MoviesApi,
    private readonly store: MovieDetailStore
  ) {}

  async getMovieDetail(id: number): Promise<void> {
    try {
      const movie = await lastValueFrom(this.movieApi.getMovieDetail(id));
      this.store.setMovie(movie);
    } catch (error) {}
  }
}
