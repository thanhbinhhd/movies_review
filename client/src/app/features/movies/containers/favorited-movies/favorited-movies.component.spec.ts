import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedMoviesComponent } from './favorited-movies.component';
import { FavoritedMoviesStore } from './favorited-movies.store';
import { FavoritedMoviesUsecase } from './favorited-movies.usecase';

describe('FavoritedMoviesComponent', () => {
  let component: FavoritedMoviesComponent;
  let fixture: ComponentFixture<FavoritedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FavoritedMoviesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FavoritedMoviesUsecase, FavoritedMoviesStore],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
