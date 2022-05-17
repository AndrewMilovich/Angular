import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentComponent} from "./comment/comment.component";
import {CommentsComponent} from "./comments/comments.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentDetailComponent} from "./comment-detail/comment-detail.component";
import {CommentService} from "./comment-service/comment.service";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService]
})
export class CommentsModule {
}
