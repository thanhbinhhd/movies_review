import { Component, Input } from '@angular/core';
import { MoviePreview } from '../../domain/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input()
  movies: MoviePreview[] = [];
}
