import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-index.component';
import { MoviesIndexStore } from './movies-index.store';
import { MoviesIndexUsecase } from './movies-index.usecase';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MoviesIndexStore, MoviesIndexUsecase],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
