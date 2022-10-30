import { TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/shared/movie/domain/movie';
import { MovieDetailStore } from './movie-detail.store';

describe('MovieDetailStore', () => {
  let store: MovieDetailStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailStore],
    });
    store = TestBed.inject(MovieDetailStore);
  });

  describe('setMovie', () => {
    it('movie$ をアップデートすること', () => {
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

      store.setMovie(movie);
      store.movie$.subscribe((value) => {
        expect(value).toEqual(movie);
      });
    });
  });
});
