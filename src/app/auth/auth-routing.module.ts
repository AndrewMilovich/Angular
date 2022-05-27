import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "login/register", component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
