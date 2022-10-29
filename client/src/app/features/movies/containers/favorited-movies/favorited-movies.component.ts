import { Component, OnInit } from '@angular/core';
import { FavoritedMoviesStore } from './favorited-movies.store';
import { FavoritedMoviesUsecase } from './favorited-movies.usecase';

@Component({
  selector: 'app-favorited-movies',
  templateUrl: './favorited-movies.component.html',
  styleUrls: ['./favorited-movies.component.scss'],
  providers: [FavoritedMoviesStore, FavoritedMoviesUsecase],
})
export class FavoritedMoviesComponent implements OnInit {
  constructor(
    private usecase: FavoritedMoviesUsecase,
    private store: FavoritedMoviesStore
  ) {}

  readonly moviesList$ = this.store.moviesList$;

  ngOnInit() {
    this.usecase.getMovies();
  }
}
