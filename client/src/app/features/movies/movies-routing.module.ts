import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritedMoviesPageComponent } from './pages/favorited-movies/favorited-movies.component';
import { MoviesIndexPageComponent } from './pages/movies-index/movies-index.component';
import { MovieDetailPageComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesIndexPageComponent },
  { path: 'favorites', component: FavoritedMoviesPageComponent },
  { path: 'movies/:id', component: MovieDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule {}
