import { TestBed } from '@angular/core/testing';
import { MoviePreview } from 'src/app/shared/movie/domain/movie';
import { MoviesIndexStore } from './movies-index.store';

describe('MoviesIndexStore', () => {
  let store: MoviesIndexStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesIndexStore],
    });
    store = TestBed.inject(MoviesIndexStore);
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
