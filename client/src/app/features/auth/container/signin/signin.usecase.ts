import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { AppGlobalStore } from 'src/app/shared/app.store';
import { SigninResponse } from 'src/app/shared/domain';
import { SignInParams } from 'src/app/shared/movie/domain/auth';

@Injectable()
export class SigninUsecase {
  constructor(
    private readonly authApi: AuthApi,
    private readonly router: Router,
    private readonly globalStore: AppGlobalStore
  ) {}

  async signIn(params: SignInParams): Promise<void> {
    try {
      const currentUser: SigninResponse = await lastValueFrom(
        this.authApi.signIn(params)
      );
      this.globalStore.setCurrentUser(currentUser.username);
      this.router.navigateByUrl('');
    } catch (e) {}
  }
}
