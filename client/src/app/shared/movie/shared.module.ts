import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './views/movie-card/movie-card.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { MoviesListComponent } from './views/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieCardComponent, MoviesListComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [MovieCardComponent, MoviesListComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(farHeart);
  }
}
