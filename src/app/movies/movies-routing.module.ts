import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListCardComponent} from "./movie-list-card/movie-list-card.component";

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: ':id', component: MovieListCardComponent}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {
}
