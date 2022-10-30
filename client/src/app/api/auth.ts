import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInParams } from '../shared/movie/domain/auth';
import { apiUrl } from '../shared/movie/domain/common';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(private readonly http: HttpClient) {}

  // FIXME:テストを追加する
  /* istanbul ignore next */
  signIn(params: SignInParams): Observable<void> {
    return this.http.post<void>(`${apiUrl}/login`, { user: params });
  }

  // FIXME:テストを追加する
  /* istanbul ignore next */
  signOut(): Observable<void> {
    return this.http.post<void>(`${apiUrl}/logout`, null);
  }
}
