import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthApi } from 'src/app/api/auth';
import { actions } from 'src/app/shared/app.store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class HeaderUsecase {
  constructor(
    private readonly authApi: AuthApi,
    private readonly store: Store<{}>,
    private readonly router: Router
  ) {}

  async signOut(): Promise<void> {
    try {
      await this.authApi.signOut();
      this.store.dispatch(actions.resetLoggedInState());
      this.router.navigateByUrl('');
    } catch (e) {}
  }
}
