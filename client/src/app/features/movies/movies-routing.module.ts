import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritedMoviesPageComponent } from './pages/favorited-movies/favorited-movies.component';
import { MoviesIndexPageComponent } from './pages/movies-index/movies-index.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesIndexPageComponent },
  { path: 'favorites', component: FavoritedMoviesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule {}
