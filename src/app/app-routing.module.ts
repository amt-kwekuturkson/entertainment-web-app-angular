import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomeComponent } from './pages/landing-page/home/home.component';
import { MoviesComponent } from './pages/landing-page/movies/movies.component';
import { TvShowsComponent } from './pages/landing-page/tv-shows/tv-shows.component';
import { BookmarkedComponent } from './pages/landing-page/bookmarked/bookmarked.component';
import { MainPageComponent } from './pages/landing-page/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'dashboard', component: MainPageComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'tvshows', component: TvShowsComponent },
    { path: 'bookmark', component: BookmarkedComponent },
  ] },

  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
