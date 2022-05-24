import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentComponent} from "./comment/comment.component";
import {CommentsComponent} from "./comments/comments.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentDetailComponent} from "./comment-detail/comment-detail.component";
import {CommentService} from "./comment-service/comment.service";
import {CommentsResolver} from "./comment-service/resolvers/comments.resolver";
import {CommentDetailsResolver} from "./comment-service/resolvers/comment-details.resolver";
import {ActivatorGuard} from "./comment-service/activator.guard";


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
  providers: [
    CommentService,
    CommentsResolver,
    CommentDetailsResolver,
    ActivatorGuard
  ]
})
export class CommentsModule {
}
