import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './pages/signin/signin.component';
import { SigninComponent } from './container/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer, featureName } from '../../shared/app.store';

@NgModule({
  declarations: [SigninPageComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ [featureName]: appReducer }),
  ],
})
export class AuthModule {}
