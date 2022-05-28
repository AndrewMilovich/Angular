import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [MovieService]
})
export class MoviesModule {
}
