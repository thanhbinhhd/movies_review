import { Component } from '@angular/core';
import { MoviesListStore } from './movies-list.store';
import { MoviesListUsecase } from './movies-list.usecase';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [MoviesListStore, MoviesListUsecase],
})
export class MoviesListComponent {
  constructor(
    private usecase: MoviesListUsecase,
    private store: MoviesListStore
  ) {}

  readonly moviesList$ = this.store.moviesList$;

  ngOnInit() {
    this.usecase.getMovies();
  }
}
