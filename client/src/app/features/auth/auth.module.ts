import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './pages/signin/signin.component';
import { SigninComponent } from './container/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninPageComponent, SigninComponent],
  imports: [CommonModule, FormsModule],
})
export class AuthModule {}
