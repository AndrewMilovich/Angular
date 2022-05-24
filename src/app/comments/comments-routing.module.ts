import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments/comments.component";
import {CommentDetailComponent} from "./comment-detail/comment-detail.component";
import {CommentsResolver} from "./comment-service/resolvers/comments.resolver";
import {CommentDetailsResolver} from "./comment-service/resolvers/comment-details.resolver";
import {ActivatorGuard} from "./comment-service/activator.guard";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [ActivatorGuard],
    children: [{
      path: 'comments-detail/:id', component: CommentDetailComponent,
      resolve: {commentDetail: CommentDetailsResolver}
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
