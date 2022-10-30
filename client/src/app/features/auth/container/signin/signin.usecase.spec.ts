import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of, skip } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { SignInParams } from 'src/app/shared/movie/domain/auth';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { SigninUsecase } from './signin.usecase';
import { actions } from 'src/app/shared/app.store';

describe('SigninUsecase', () => {
  let usecase: SigninUsecase;
  let api: AuthApi;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SigninUsecase,
        provideMockStore({
          initialState: {
            loggedInState: true,
          },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    usecase = TestBed.inject(SigninUsecase);
    api = TestBed.inject(AuthApi);
    store$ = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('signIn', () => {
    it('ログインできて、Store の loggedInState を保存すること', async () => {
      const userParams: SignInParams = {
        username: 'username',
        password: 'password',
      };
      spyOn(api, 'signIn').and.returnValue(
        of({ user: { username: 'username' } })
      );
      const setLoggedInStateAction = actions.setLoggedInState();
      const runActions: Action[] = [];
      store$.scannedActions$
        .pipe(skip(1))
        .subscribe((action) => runActions.push(action as Action));

      await usecase.signIn(userParams);
      expect(runActions).toEqual([setLoggedInStateAction]);
    });
  });
});
