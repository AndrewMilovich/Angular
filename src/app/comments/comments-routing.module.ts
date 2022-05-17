import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentDetailComponent} from "./comment-detail/comment-detail.component";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, children: [{
      path: 'comments-detail/:id', component: CommentDetailComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
