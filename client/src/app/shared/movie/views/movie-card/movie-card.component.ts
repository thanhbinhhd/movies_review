import { Component, Input } from '@angular/core';
import { MoviePreview } from '../../domain/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input()
  movie: MoviePreview | null = null;
}
