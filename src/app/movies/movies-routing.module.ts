import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListCardComponent} from "./movie-list-card/movie-list-card.component";
import {MovieListCardResolver} from "./movie-list-card/service/resolvers/movie-list-card.resolver";

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: ':id', component: MovieListCardComponent,
    resolve: {movieListCard: MovieListCardResolver}
},

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {
}
