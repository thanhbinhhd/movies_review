import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../shared/movie/domain/common';
import { Movie, MoviePreview } from '../shared/movie/domain/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  constructor(private readonly http: HttpClient) {}

  getMoviesList(): Observable<MoviePreview[]> {
    return this.http.get<MoviePreview[]>(`${apiUrl}/movies`);
  }

  searchMovies(searchKey: string): Observable<MoviePreview[]> {
    return this.http.get<MoviePreview[]>(
      `${apiUrl}/movies?search=${searchKey}`
    );
  }

  getFavoritedMovies(): Observable<MoviePreview[]> {
    return this.http.get<MoviePreview[]>(`${apiUrl}/favorites`);
  }

  getMovieDetail(id: number): Observable<Movie | null> {
    return this.http.get<Movie | null>(`${apiUrl}/movies/${id}`);
  }
}
