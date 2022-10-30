import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInParams } from '../shared/movie/domain/auth';
import { apiUrl, SigninResponse } from '../shared/domain';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(private readonly http: HttpClient) {}

  signIn(params: SignInParams): Observable<SigninResponse> {
    return this.http.post<SigninResponse>(`${apiUrl}/login`, { user: params });
  }

  signOut(): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/logout`);
  }
}
