import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../components/homepage/homepage.component";

let routes:Routes=[
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'users',loadChildren:()=> import('../users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'posts',loadChildren:()=> import('../posts/posts.module').then(m=>m.PostsModule)
  },
  {
    path:'comments',loadChildren:()=> import('../comments/comments.module').then(m=>m.CommentsModule)
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
