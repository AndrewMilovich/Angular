import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostsResolver} from "./post-service/resolvers/posts.resolver";
import {PostResolver} from "./post-service/resolvers/post.resolver";


const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children:
      [
        {
          path: 'post-detail/:id', component: PostDetailComponent,
          resolve: {postData: PostResolver}
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
