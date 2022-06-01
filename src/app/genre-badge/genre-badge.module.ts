import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenreBadgeRoutingModule} from './genre-badge-routing.module';
import {GenresComponent} from './genres/genres.component';
import {GenreService} from "./service/genre.service";
import {NgxPaginationModule} from "ngx-pagination";
import { GenreComponent } from './genre/genre.component';


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
  ],
  imports: [
    CommonModule,
    GenreBadgeRoutingModule,
    NgxPaginationModule,
  ], providers: [
    GenreService
  ]
})
export class GenreBadgeModule {
}
