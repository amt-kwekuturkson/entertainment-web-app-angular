import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './landing-page/side-bar/side-bar.component';
import { SearchBarComponent } from './landing-page/search-bar/search-bar.component';
import { SideBarButtonComponent } from './landing-page/side-bar-button/side-bar-button.component';
import { ButtonComponent } from './login/button/button.component';
import { FormComponent } from './login/form/form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomeComponent } from './pages/landing-page/home/home.component';
import { MoviesComponent } from './pages/landing-page/movies/movies.component';
import { TvShowsComponent } from './pages/landing-page/tv-shows/tv-shows.component';
import { BookmarkedComponent } from './pages/landing-page/bookmarked/bookmarked.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchBarComponent,
    SideBarButtonComponent,
    ButtonComponent,
    FormComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    BookmarkedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
