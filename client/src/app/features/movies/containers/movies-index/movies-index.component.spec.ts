import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesIndexComponent } from './movies-index.component';
import { MoviesIndexStore } from './movies-index.store';
import { MoviesIndexUsecase } from './movies-index.usecase';

describe('MoviesIndexComponent', () => {
  let component: MoviesIndexComponent;
  let fixture: ComponentFixture<MoviesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviesIndexComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MoviesIndexStore, MoviesIndexUsecase],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
