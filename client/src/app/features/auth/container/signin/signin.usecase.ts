import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { SignInParams } from 'src/app/shared/movie/domain/auth';

@Injectable()
export class SigninUsecase {
  constructor(
    private readonly authApi: AuthApi,
    private readonly router: Router
  ) {}

  // FIXME:テストを追加する
  /* istanbul ignore next */
  async signIn(params: SignInParams): Promise<void> {
    try {
      await lastValueFrom(this.authApi.signIn(params));
      this.router.navigateByUrl('/movies');
    } catch (e) {}
  }
}
