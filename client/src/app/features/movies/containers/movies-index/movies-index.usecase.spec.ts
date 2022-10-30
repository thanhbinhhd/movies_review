import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesApi } from 'src/app/api/movies';
import { MoviePreview } from 'src/app/shared/movie/domain/movie';
import { MoviesIndexStore } from './movies-index.store';
import { MoviesIndexUsecase } from './movies-index.usecase';

describe('MoviesIndexUsecase', () => {
  let store: MoviesIndexStore;
  let usecase: MoviesIndexUsecase;
  let api: MoviesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesIndexStore, MoviesIndexUsecase],
    }).compileComponents();
    store = TestBed.inject(MoviesIndexStore);
    usecase = TestBed.inject(MoviesIndexUsecase);
    api = TestBed.inject(MoviesApi);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('getMovies', () => {
    it('映画一覧を取得してから、Storeに保存すること', async () => {
      const moviesList: MoviePreview[] = [
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
      spyOn(api, 'getMoviesList').and.returnValue(of(moviesList));

      await usecase.getMovies();
      store.moviesList$.subscribe((value) => {
        expect(value).toEqual(moviesList);
      });
    });
  });

  describe('searchMovies', () => {
    it('映画一覧を取得してから、Storeに保存すること', async () => {
      const moviesList: MoviePreview[] = [
        {
          id: 1,
          name: 'name 1',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
        {
          id: 2,
          name: 'name 1',
          description: 'description',
          thumbnail: 'thumbnail.png',
        },
      ];
      spyOn(api, 'searchMovies').and.returnValue(of(moviesList));

      await usecase.searchMovies('name');
      store.moviesList$.subscribe((value) => {
        expect(value).toEqual(moviesList);
      });
    });
  });
});
