import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/landing-page/side-bar/side-bar.component';
import { SearchBarComponent } from './components/landing-page/search-bar/search-bar.component';
import { SideBarButtonComponent } from './components/landing-page/side-bar-button/side-bar-button.component';
import { ButtonComponent } from './components/login/button/button.component';
import { FormComponent } from './components/login/form/form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomeComponent } from './pages/landing-page/home/home.component';
import { MoviesComponent } from './pages/landing-page/movies/movies.component';
import { TvShowsComponent } from './pages/landing-page/tv-shows/tv-shows.component';
import { BookmarkedComponent } from './pages/landing-page/bookmarked/bookmarked.component';
import { MainPageComponent } from './pages/landing-page/main-page/main-page.component';
import { CarouselComponent } from './components/landing-page/carousel/carousel.component';
import { MediaDetailsComponent } from './components/landing-page/media-details/media-details.component';
import { BookmarkFullComponent } from './components/landing-page/bookmark-full/bookmark-full.component';
import { BookmarkEmptyComponent } from './components/landing-page/bookmark-empty/bookmark-empty.component';
import { BookmarkStatusComponent } from './components/landing-page/bookmark-status/bookmark-status.component';
import { CarouselWheelComponent } from './components/landing-page/carousel-wheel/carousel-wheel.component';

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
    BookmarkedComponent,
    MainPageComponent,
    CarouselComponent,
    MediaDetailsComponent,
    BookmarkFullComponent,
    BookmarkEmptyComponent,
    BookmarkStatusComponent,
    CarouselWheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
