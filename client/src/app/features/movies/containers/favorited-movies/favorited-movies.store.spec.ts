import { TestBed } from '@angular/core/testing';
import { MoviePreview } from 'src/app/shared/movie/domain/movie';
import { FavoritedMoviesStore } from './favorited-movies.store';

describe('FavoritedMoviesStore', () => {
  let store: FavoritedMoviesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritedMoviesStore],
    });
    store = TestBed.inject(FavoritedMoviesStore);
  });

  describe('setMovieList', () => {
    it('setMovieList をアップデートすること', () => {
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
      store.setMovieList(moviesList);
      store.moviesList$.subscribe((value) => {
        expect(value).toEqual(moviesList);
      });
    });
  });
});
