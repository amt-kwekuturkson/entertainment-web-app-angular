import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkEmptyComponent } from './components/landing-page/bookmark-empty/bookmark-empty.component';
import { BookmarkFullComponent } from './components/landing-page/bookmark-full/bookmark-full.component';
import { BookmarkStatusComponent } from './components/landing-page/bookmark-status/bookmark-status.component';
import { CarouselWheelComponent } from './components/landing-page/carousel-wheel/carousel-wheel.component';
import { CarouselComponent } from './components/landing-page/carousel/carousel.component';
import { MediaDetailsComponent } from './components/landing-page/media-details/media-details.component';
import { SearchBarComponent } from './components/landing-page/search-bar/search-bar.component';
import { SideBarButtonComponent } from './components/landing-page/side-bar-button/side-bar-button.component';
import { SideBarComponent } from './components/landing-page/side-bar/side-bar.component';
import { StandardCardComponent } from './components/landing-page/standard-card/standard-card.component';
import { StandardViewComponent } from './components/landing-page/standard-view/standard-view.component';
import { ButtonComponent } from './components/login/button/button.component';
import { FormComponent } from './components/login/form/form.component';
import { BookmarkedComponent } from './pages/landing-page/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/landing-page/home/home.component';
import { MainPageComponent } from './pages/landing-page/main-page/main-page.component';
import { MoviesComponent } from './pages/landing-page/movies/movies.component';
import { TvShowsComponent } from './pages/landing-page/tv-shows/tv-shows.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HttpClientModule} from '@angular/common/http';
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
    CarouselWheelComponent,
    StandardViewComponent,
    StandardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
