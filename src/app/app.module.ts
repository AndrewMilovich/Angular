import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from './components/homepage/homepage.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {
    path: 'posts', component: PostsComponent,
    children:
      [{
        path: 'post-detail/:id', component: PostDetailComponent,
      }]
  },
  {path: 'comments', component: CommentsComponent, children:[{
    path:'comments-detail/:id', component: CommentDetailComponent
    }]},
  {
    path: 'users', component: UsersComponent,
    children:
      [{path: 'user-details/:id', component: UserDetailComponent}]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomepageComponent,
    UserDetailComponent,
    PostDetailComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
