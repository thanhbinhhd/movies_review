import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private store: MoviesIndexStore,
    private route: ActivatedRoute
  ) {}

  readonly moviesList$ = this.store.moviesList$;

  ngOnInit() {
    // TODO：テストファイルを修正する
    /* istanbul ignore next */
    this.route.queryParams.subscribe((params) => {
      if (params['search'] === undefined) {
        this.usecase.getMovies();
      } else {
        this.usecase.searchMovies(params['search']);
      }
    });
  }

  async addFavoriteClicked(movieId: number) {
    await this.usecase.addFavorite(movieId);
  }
}
