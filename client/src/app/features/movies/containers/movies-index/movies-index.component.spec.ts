import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  ParamMap,
  Params,
} from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { MoviesIndexComponent } from './movies-index.component';
import { MoviesIndexStore } from './movies-index.store';
import { MoviesIndexUsecase } from './movies-index.usecase';

class MockActivatedRoute {
  private sunjectQueryParams = new ReplaySubject<ParamMap>();

  constructor(initQueryParmas?: Params) {
    this.setQueryParams(initQueryParmas);
  }

  setQueryParams(params: Params = {}) {
    this.sunjectQueryParams.next(convertToParamMap(params));
  }

  readonly queryParams = this.sunjectQueryParams.asObservable();
}

class MockMoviesIndexUsecase {
  getMovies() {}
  searchMovies() {}
  addFavorite() {}
}

describe('MoviesIndexComponent', () => {
  let component: MoviesIndexComponent;
  let fixture: ComponentFixture<MoviesIndexComponent>;
  let usecase: MoviesIndexUsecase;
  const activeRoute = new MockActivatedRoute();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviesIndexComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        MoviesIndexStore,
        { provide: ActivatedRoute, useValue: activeRoute },
        { provide: MoviesIndexUsecase, useClass: MockMoviesIndexUsecase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesIndexComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(MoviesIndexUsecase);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: テストを修正する
  // describe('ngOnInit', () => {
  //   it('search という query params が無い場合、usecase の getMovies メソッドを呼び出すこと', () => {
  //     activeRoute.setQueryParams({});
  //     fixture.detectChanges();
  //     spyOn(usecase, 'getMovies');
  //     spyOn(usecase, 'searchMovies');
  //     component.ngOnInit();
  //     expect(usecase.getMovies).toHaveBeenCalled();
  //     expect(usecase.searchMovies).not.toHaveBeenCalled();
  //   });

  //   it('search という query params がある場合、usecase の searchMovies メソッドを呼び出すこと', () => {
  //     activeRoute.setQueryParams({ search: 'search key' });
  //     fixture.detectChanges();
  //     spyOn(usecase, 'getMovies');
  //     spyOn(usecase, 'searchMovies');
  //     component.ngOnInit();
  //     expect(usecase.getMovies).not.toHaveBeenCalled();
  //     expect(usecase.searchMovies).toHaveBeenCalled();
  //   });
  // });

  describe('addFavoriteClicked', () => {
    it('usecase の addFavorite メソッドを呼び出すこと', () => {
      spyOn(usecase, 'addFavorite');
      component.addFavoriteClicked(1);
      expect(usecase.addFavorite).toHaveBeenCalled();
    });
  });
});
