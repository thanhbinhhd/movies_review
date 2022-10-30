import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of, skip } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { SignInParams } from 'src/app/shared/movie/domain/auth';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { actions } from 'src/app/shared/app.store';
import { HeaderUsecase } from './header.usecase';

describe('SigninUsecase', () => {
  let usecase: HeaderUsecase;
  let api: AuthApi;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeaderUsecase,
        provideMockStore({
          initialState: {
            loggedInState: true,
          },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    usecase = TestBed.inject(HeaderUsecase);
    api = TestBed.inject(AuthApi);
    store$ = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('signOut', () => {
    it('ログアウトできて、Store の loggedInState を削除すること', async () => {
      spyOn(api, 'signOut');
      const resetLoggedInStateAction = actions.resetLoggedInState();
      const runActions: Action[] = [];
      store$.scannedActions$
        .pipe(skip(1))
        .subscribe((action) => runActions.push(action as Action));

      await usecase.signOut();
      expect(runActions).toEqual([resetLoggedInStateAction]);
    });
  });
});
