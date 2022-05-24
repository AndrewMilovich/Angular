import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UsersResolver} from "./user-service/resolvers/users.resolver";
import {UserResolver} from "./user-service/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    children:
      [
        {
          path: 'user-details/:id', component: UserDetailComponent,
          resolve: {userData: UserResolver}
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
