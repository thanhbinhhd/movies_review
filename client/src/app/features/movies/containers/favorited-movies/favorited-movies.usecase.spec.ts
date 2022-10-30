import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FavoritesApi } from 'src/app/api/favorites';
import { MoviesApi } from 'src/app/api/movies';
import { MoviePreview } from 'src/app/shared/movie/domain/movie';
import { FavoritedMoviesStore } from './favorited-movies.store';
import { FavoritedMoviesUsecase } from './favorited-movies.usecase';

describe('FavoritedMoviesUsecase', () => {
  let store: FavoritedMoviesStore;
  let usecase: FavoritedMoviesUsecase;
  let api: MoviesApi;
  let favoritesApi: FavoritesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavoritedMoviesStore, FavoritedMoviesUsecase],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(FavoritedMoviesStore);
    usecase = TestBed.inject(FavoritedMoviesUsecase);
    api = TestBed.inject(MoviesApi);
    favoritesApi = TestBed.inject(FavoritesApi);
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
      spyOn(api, 'getFavoritedMovies').and.returnValue(of(moviesList));

      await usecase.getMovies();
      store.moviesList$.subscribe((value) => {
        expect(value).toEqual(moviesList);
      });
    });
  });

  describe('addFavorite', () => {
    it('映画をブックマークするAPIを呼び出す', async () => {
      const movieId = 1;
      spyOn(favoritesApi, 'addFavorite');

      await usecase.addFavorite(movieId);
      expect(favoritesApi.addFavorite).toHaveBeenCalled();
    });
  });
});
