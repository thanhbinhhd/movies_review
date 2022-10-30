import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { apiUrl } from '../shared/domain';
import { SignInParams } from '../shared/movie/domain/auth';
import { FavoritesApi } from './favorites';

describe('FavoritesApi', () => {
  let api: FavoritesApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    api = TestBed.inject(FavoritesApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  describe('addFavorite', () => {
    it('映画をブックマークするAPIを呼び出す', () => {
      api.addFavorite(1).subscribe();
      const req = httpTestingController.expectOne(`${apiUrl}/favorites/1`);
      expect(req.request.method).toEqual('POST');
    });
  });
});
