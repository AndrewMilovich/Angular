import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenreBadgeRoutingModule} from './genre-badge-routing.module';
import {GenresComponent} from './genres/genres.component';
import {GenreService} from "./service/genre.service";


@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenreBadgeRoutingModule
  ], providers: [
    GenreService
  ]
})
export class GenreBadgeModule {
}
