import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../shared/domain';

@Injectable({
  providedIn: 'root',
})
export class FavoritesApi {
  constructor(private readonly http: HttpClient) {}

  addFavorite(movieId: number): Observable<void> {
    return this.http.post<void>(`${apiUrl}/favorites/${movieId}`, {});
  }
}
