import { Routes } from "@angular/router";
import { AuthenticationComponent } from "@features/authentication/component/login/authentication.component";

export const featuresRoutes: Routes = [
    { path: '', loadChildren: () => import('@features/authentication/authentication.module').then(m => m.AuthenticationModule) }
]