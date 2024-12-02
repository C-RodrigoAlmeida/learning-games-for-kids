import { Routes } from "@angular/router";

import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { ProfileComponent } from "./features/account/profile/profile.component";
import { NotFoundComponent } from "./features/auth/components/not-found/not-found.component";
import { SelectionComponent } from "./features/organization/pages/selection/selection.component";

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: "full" },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'account/profile',
        component: ProfileComponent
    },
    {
        path: 'organization',
        component: SelectionComponent
    },
    {
        path: '**',
        component: NotFoundComponent // mudar para 404 not found
    },
]