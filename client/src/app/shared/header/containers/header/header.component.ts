import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectApp } from 'src/app/shared/app.store';
import { HeaderUsecase } from './header.usecase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderUsecase],
})
export class HeaderComponent {
  constructor(
    private readonly store: Store<{}>,
    private readonly usecase: HeaderUsecase
  ) {}
  readonly currentUser$ = this.store.pipe(select(selectApp));

  signOut() {
    this.usecase.signOut();
  }
}
