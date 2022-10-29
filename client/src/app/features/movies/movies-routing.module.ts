import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesIndexPageComponent } from './pages/movies-index/movies-index.component';

const routes: Routes = [{ path: '', component: MoviesIndexPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule {}
