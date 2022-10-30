import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesApi } from 'src/app/api/movies';
import { Movie, MoviePreview } from 'src/app/shared/movie/domain/movie';
import { MovieDetailStore } from './movie-detail.store';
import { MovieDetailUsecase } from './movie-detail.usecase';

describe('MovieDetailUsecase', () => {
  let store: MovieDetailStore;
  let usecase: MovieDetailUsecase;
  let api: MoviesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieDetailStore, MovieDetailUsecase],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MovieDetailStore);
    usecase = TestBed.inject(MovieDetailUsecase);
    api = TestBed.inject(MoviesApi);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('getMovieDetail', () => {
    it('映画詳細を取得してから、Storeに保存すること', async () => {
      const movie: Movie = {
        id: 2,
        name: 'name',
        description: 'description',
        thumbnail: 'thumbnail.png',
        director: 'direactor',
        actor: 'actor1, actor2',
        year: 2022,
        reviews: [],
      };

      spyOn(api, 'getMovieDetail').and.returnValue(of(movie));

      await usecase.getMovieDetail(1);
      store.movie$.subscribe((value) => {
        expect(value).toEqual(movie);
      });
    });
  });
});
