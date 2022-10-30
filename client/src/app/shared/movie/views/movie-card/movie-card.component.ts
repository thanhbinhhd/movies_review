import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviePreview } from '../../domain/movie';
import { Store, select } from '@ngrx/store';
import { selectApp } from 'src/app/shared/app.store';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input()
  movie: MoviePreview | null = null;
  @Output()
  addFavorite = new EventEmitter<number>();

  constructor(private readonly store: Store<{}>) {}

  readonly currentUser$ = this.store.pipe(select(selectApp));

  clickFavorite(movieId: number) {
    this.addFavorite.emit(movieId);
  }
}
