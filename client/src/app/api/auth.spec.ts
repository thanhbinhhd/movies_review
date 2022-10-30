import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { apiUrl } from '../shared/domain';
import { SignInParams } from '../shared/movie/domain/auth';
import { AuthApi } from './auth';

describe('AuthApi', () => {
  let api: AuthApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    api = TestBed.inject(AuthApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  describe('signIn', () => {
    it('ログインできること', () => {
      const userParams: SignInParams = {
        username: 'username',
        password: 'password',
      };

      api.signIn(userParams).subscribe((data) => {
        expect(data).toEqual({ user: { username: 'username' } });
      });

      const req = httpTestingController.expectOne(`${apiUrl}/login`);
      expect(req.request.method).toEqual('POST');
      req.flush({ user: { username: 'username' } });
    });
  });

  describe('signOut', () => {
    it('ログアウトできること', () => {
      api.signOut().subscribe();
      const req = httpTestingController.expectOne(`${apiUrl}/logout`);
      expect(req.request.method).toEqual('DELETE');
    });
  });
});
