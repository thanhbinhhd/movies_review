import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent {
  constructor(private router: Router) {}

  searchMovieForm = new FormControl<string | null>(null, Validators.required);

  searchMovie() {
    if (this.searchMovieForm.valid) {
      const searchKey = this.searchMovieForm.value;
      this.searchMovieForm.reset();
      this.router.navigateByUrl('/movies?search=' + searchKey);
    }
  }
}
