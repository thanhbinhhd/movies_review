import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListPageComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [{ path: '', component: MoviesListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule {}
