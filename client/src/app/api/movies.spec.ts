import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { apiUrl } from '../shared/domain';
import { MoviePreview } from '../shared/movie/domain/movie';
import { MoviesApi } from './movies';

describe('MoviesApi', () => {
  let api: MoviesApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    api = TestBed.inject(MoviesApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  describe('getMoviesList', () => {
    it('映画一覧を返すこと', () => {
      const responseData: MoviePreview[] = [
        {
          id: 1,
          name: 'name',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
        {
          id: 2,
          name: 'name',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
      ];

      api.getMoviesList().subscribe((data) => {
        expect(data).toEqual(responseData);
      });

      const req = httpTestingController.expectOne(`${apiUrl}/movies`);
      expect(req.request.method).toEqual('GET');
      req.flush(responseData);
    });
  });

  describe('searchMovies', () => {
    it('映画一覧を返すこと', () => {
      const responseData: MoviePreview[] = [
        {
          id: 1,
          name: 'name 1',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
        {
          id: 2,
          name: 'name 2',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
      ];

      const searchKey = 'name';

      api.searchMovies(searchKey).subscribe((data) => {
        expect(data).toEqual(responseData);
      });

      const req = httpTestingController.expectOne(
        `${apiUrl}/movies?search=${searchKey}`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(responseData);
    });
  });
});
