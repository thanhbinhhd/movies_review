import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedMoviesPageComponent } from './favorited-movies.component';

describe('MoviesIndexPageComponent', () => {
  let component: FavoritedMoviesPageComponent;
  let fixture: ComponentFixture<FavoritedMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritedMoviesPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritedMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
