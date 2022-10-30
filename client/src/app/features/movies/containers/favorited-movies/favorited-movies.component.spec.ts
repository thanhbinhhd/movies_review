import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedMoviesComponent } from './favorited-movies.component';
import { FavoritedMoviesStore } from './favorited-movies.store';
import { FavoritedMoviesUsecase } from './favorited-movies.usecase';

class MockFavoritedMoviesUsecase {
  addFavorite() {}
}

describe('FavoritedMoviesComponent', () => {
  let component: FavoritedMoviesComponent;
  let fixture: ComponentFixture<FavoritedMoviesComponent>;
  let usecase: FavoritedMoviesUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FavoritedMoviesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: FavoritedMoviesUsecase,
          useClass: MockFavoritedMoviesUsecase,
        },
        FavoritedMoviesStore,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritedMoviesComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(FavoritedMoviesUsecase);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addFavoriteClicked', () => {
    it('usecase の addFavorite メソッドを呼び出すこと', () => {
      spyOn(usecase, 'addFavorite');
      component.addFavoriteClicked(1);
      expect(usecase.addFavorite).toHaveBeenCalled();
    });
  });
});
