import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "@features/authentication/component/login/authentication.component";
import { authenticationRoutes } from "./authentication.routing";
import {AuthenticationService} from "@core/services/authentication.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    RouterModule.forChild(authenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
