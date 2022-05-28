import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('../main-layout/main-layout.module').then(m => m.MainLayoutModule)
  },
  {path: 'movies', loadChildren: () => import('../movies/movies.module').then(m => m.MoviesModule)},
  {path: 'genre', loadChildren: () => import('../genre-badge/genre-badge.module').then(m => m.GenreBadgeModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
