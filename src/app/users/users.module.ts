import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user-service/user.service";
import {UserComponent} from "./user/user.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UsersResolver} from "./user-service/resolvers/users.resolver";
import {UserResolver} from "./user-service/resolvers/user.resolver";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,UsersResolver,UserResolver
  ]
})
export class UsersModule {
}
