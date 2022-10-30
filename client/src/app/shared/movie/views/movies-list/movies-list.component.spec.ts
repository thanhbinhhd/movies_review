import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addFavoriteClicked', () => {
    it('addFavorite を emit すること', () => {
      spyOn(component.addFavorite, 'emit');
      component.addFavoriteClicked(1);
      expect(component.addFavorite.emit).toHaveBeenCalledWith(1);
    });
  });
});
