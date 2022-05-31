import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenresComponent} from "./genres/genres.component";
import {MovieListCardComponent} from "../movies/movie-list-card/movie-list-card.component";
import {MovieListCardResolver} from "../movies/movie-list-card/service/resolvers/movie-list-card.resolver";

const routes: Routes = [
  {
    path: '', component: GenresComponent, children: [
      {
        path: ':id', component: GenresComponent
      }]
  },
  {path: 'film/:id', component: MovieListCardComponent,
    resolve: {movieListCard: MovieListCardResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreBadgeRoutingModule {
}
