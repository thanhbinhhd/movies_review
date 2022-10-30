import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { AppGlobalStore } from 'src/app/shared/app.store';
import { SignInParams } from 'src/app/shared/movie/domain/auth';
import { SigninUsecase } from './signin.usecase';

describe('SigninUsecase', () => {
  let globalStore: AppGlobalStore;
  let usecase: SigninUsecase;
  let api: AuthApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppGlobalStore, SigninUsecase],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    globalStore = TestBed.inject(AppGlobalStore);
    usecase = TestBed.inject(SigninUsecase);
    api = TestBed.inject(AuthApi);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  describe('signIn', () => {
    it('ログインできて、currentUser をStoreに保存すること', async () => {
      const userParams: SignInParams = {
        username: 'username',
        password: 'password',
      };
      spyOn(api, 'signIn').and.returnValue(of({ username: 'username' }));

      await usecase.signIn(userParams);
      globalStore.currentUser$.subscribe((value) => {
        expect(value).toEqual('username');
      });
    });
  });
});
