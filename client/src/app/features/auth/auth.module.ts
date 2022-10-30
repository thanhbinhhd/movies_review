import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './pages/signin/signin.component';
import { SigninComponent } from './container/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninPageComponent, SigninComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
