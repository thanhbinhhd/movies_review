import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { SignInParams } from 'src/app/shared/movie/domain/auth';
import { actions } from 'src/app/shared/app.store';
import { Store } from '@ngrx/store';
@Injectable()
export class SigninUsecase {
  constructor(
    private readonly authApi: AuthApi,
    private readonly router: Router,
    private readonly store: Store<{}>
  ) {}

  async signIn(params: SignInParams): Promise<void> {
    try {
      await lastValueFrom(this.authApi.signIn(params));
      this.store.dispatch(actions.setLoggedInState());
      this.router.navigateByUrl('');
    } catch (e) {}
  }
}
