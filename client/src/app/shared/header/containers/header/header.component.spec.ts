import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderUsecase } from './header.usecase';

class MockHeaderUsecase {
  signOut() {}
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let usecase: HeaderUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({
          initialState: {
            loggedInState: true,
          },
        }),
        { provide: HeaderUsecase, useClass: MockHeaderUsecase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(HeaderUsecase);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('signOut', () => {
    it('usecase の signOut メソッドを呼び出すこと', () => {
      spyOn(usecase, 'signOut');
      component.signOut();
      expect(usecase.signOut).toHaveBeenCalled();
    });
  });
});
