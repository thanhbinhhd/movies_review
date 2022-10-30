import { TestBed } from '@angular/core/testing';
import { AppGlobalStore } from './app.store';

describe('AppGlobalStore', () => {
  let store: AppGlobalStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalStore],
    });
    store = TestBed.inject(AppGlobalStore);
  });

  describe('setCurrentUser', () => {
    it('setMovieList をアップデートすること', () => {
      const currentUser = 'user name';
      store.setCurrentUser(currentUser);
      store.currentUser$.subscribe((value) => {
        expect(value).toEqual(currentUser);
      });
    });
  });
});
