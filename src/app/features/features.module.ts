import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "@features/authentication/component/login/authentication.component";
import { featuresRoutes } from "./features.routing";

@NgModule({
    imports: [
        RouterModule.forChild(featuresRoutes)
    ]
})
export class FeaturesModule {}