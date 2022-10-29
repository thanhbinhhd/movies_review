import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesIndexComponent } from './containers/movies-index/movies-index.component';
import { MoviesIndexPageComponent } from './pages/movies-index/movies-index.component';
import { SharedModule } from '../../shared/movie/shared.module';
import { MoviesListRoutingModule } from './movies-routing.module';
import { FavoritedMoviesPageComponent } from './pages/favorited-movies/favorited-movies.component';
import { FavoritedMoviesComponent } from './containers/favorited-movies/favorited-movies.component';

@NgModule({
  declarations: [
    MoviesIndexPageComponent,
    MoviesIndexComponent,
    FavoritedMoviesPageComponent,
    FavoritedMoviesComponent,
  ],
  imports: [CommonModule, SharedModule, MoviesListRoutingModule],
})
export class MoviesModule {}
