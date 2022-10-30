import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailStore } from './movie-detail.store';
import { MovieDetailUsecase } from './movie-detail.usecase';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieDetailStore, MovieDetailUsecase],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private usecase: MovieDetailUsecase,
    private store: MovieDetailStore,
    private route: ActivatedRoute
  ) {}

  readonly movieDetail$ = this.store.movie$;

  ngOnInit(): void {
    const movieId: number = +this.route.snapshot.params['id'];
    this.usecase.getMovieDetail(movieId);
  }
}
