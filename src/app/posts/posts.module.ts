import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts/posts.component";
import {PostsRoutingModule} from "./post-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./post-service/post.service";



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostService
  ]
})
export class PostsModule { }
