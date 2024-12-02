import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { SelectionComponent } from "./features/organization/pages/selection/selection.component";

export const routes: Routes = [
    { path: '', 
        redirectTo: 'login',
        pathMatch: "full"
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'organization',
        component: SelectionComponent
    },
    {
        path: '**',
        component: LoginComponent // mudar para 404 not found
    },
]