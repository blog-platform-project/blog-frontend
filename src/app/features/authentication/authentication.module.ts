import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "@features/authentication/component/login/authentication.component";
import { authenticationRoutes } from "./authentication.routing";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    RouterModule.forChild(authenticationRoutes),
  ],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}