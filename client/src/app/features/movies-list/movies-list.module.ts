import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './containers/movies-list/movies-list.component';
import { MoviesListPageComponent } from './pages/movies-list/movies-list.component';
import { MovieCardModule } from '../../shared/movie/movie-card.module';
import { MoviesListRoutingModule } from './movies-list-routing.module';

@NgModule({
  declarations: [MoviesListPageComponent, MoviesListComponent],
  imports: [CommonModule, MovieCardModule, MoviesListRoutingModule],
})
export class MoviesListModule {}
