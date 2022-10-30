import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './features/auth/auth.module';
import { AuthCredentialInterceptor } from './http-interceptor';
import { SearchMoviesComponent } from './features/movies/containers/search-movies/search-movies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/containers/header/header.component';

@NgModule({
  declarations: [AppComponent, SearchMoviesComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthCredentialInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
