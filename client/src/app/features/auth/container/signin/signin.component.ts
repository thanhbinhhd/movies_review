import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppGlobalStore } from 'src/app/shared/app.store';
import { SignInParams } from 'src/app/shared/movie/domain/auth';
import { SigninUsecase } from './signin.usecase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [SigninUsecase, AppGlobalStore],
})
export class SigninComponent {
  constructor(private usecase: SigninUsecase) {}

  loginForm = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  // FIXME:テストを追加する
  /* istanbul ignore next */
  login() {
    const params = this.loginForm.value as SignInParams;
    this.usecase.signIn(params);
  }
}
