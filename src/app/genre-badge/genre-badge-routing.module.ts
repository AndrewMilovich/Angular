import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenresComponent} from "./genres/genres.component";

const routes: Routes = [
  {path: '', component: GenresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreBadgeRoutingModule {
}
