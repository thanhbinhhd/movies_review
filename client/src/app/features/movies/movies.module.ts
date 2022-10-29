import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './containers/movies-index/movies-index.component';
import { MoviesIndexPageComponent } from './pages/movies-index/movies-index.component';
import { SharedModule } from '../../shared/movie/shared.module';
import { MoviesListRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesIndexPageComponent, MoviesListComponent],
  imports: [CommonModule, SharedModule, MoviesListRoutingModule],
})
export class MoviesListModule {}
