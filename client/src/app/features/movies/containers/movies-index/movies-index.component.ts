import { Component, OnInit } from '@angular/core';
import { MoviesIndexStore } from './movies-index.store';
import { MoviesIndexUsecase } from './movies-index.usecase';

@Component({
  selector: 'app-movies-index',
  templateUrl: './movies-index.component.html',
  styleUrls: ['./movies-index.component.scss'],
  providers: [MoviesIndexStore, MoviesIndexUsecase],
})
export class MoviesIndexComponent implements OnInit {
  constructor(
    private usecase: MoviesIndexUsecase,
    private store: MoviesIndexStore
  ) {}

  readonly moviesList$ = this.store.moviesList$;

  ngOnInit() {
    this.usecase.getMovies();
  }
}
