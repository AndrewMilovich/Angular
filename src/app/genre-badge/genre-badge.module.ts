import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenreBadgeRoutingModule} from './genre-badge-routing.module';
import {GenresComponent} from './genres/genres.component';
import {GenreService} from "./service/genre.service";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    GenresComponent,
  ],
  imports: [
    CommonModule,
    GenreBadgeRoutingModule,
    NgxPaginationModule
  ], providers: [
    GenreService
  ]
})
export class GenreBadgeModule {
}
