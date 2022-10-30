import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchMoviesComponent } from './search-movies.component';

class MockRouter {
  navigateByUrl() {}
}

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;
  let route: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMoviesComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: Router, useClass: MockRouter }],
    }).compileComponents();

    route = TestBed.inject(Router);
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchMovie', () => {
    it('フォームの値が空の場合、navigateByUrl メソッドを呼び出さないこと', () => {
      component.searchMovieForm.setValue('');
      fixture.detectChanges();
      spyOn(route, 'navigateByUrl');
      component.searchMovie();
      expect(route.navigateByUrl).not.toHaveBeenCalled();
    });

    it('フォームの値が空ではない場合、フォームをリセットして、navigateByUrl メソッドを呼び出すこと', () => {
      component.searchMovieForm.setValue('search key');
      fixture.detectChanges();
      spyOn(route, 'navigateByUrl');
      component.searchMovie();
      expect(component.searchMovieForm.value).toEqual(null);
      expect(route.navigateByUrl).toHaveBeenCalled();
    });
  });
});
