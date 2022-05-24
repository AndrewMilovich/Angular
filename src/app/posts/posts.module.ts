import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts/posts.component";
import {PostsRoutingModule} from "./post-routing.module";
import {PostService} from "./post-service/post.service";
import {PostsResolver} from "./post-service/resolvers/posts.resolver";
import {PostResolver} from "./post-service/resolvers/post.resolver";
import {PostDetailComponent} from "./post-detail/post-detail.component";



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostService,
    PostsResolver,
    PostResolver
  ]
})
export class PostsModule { }
