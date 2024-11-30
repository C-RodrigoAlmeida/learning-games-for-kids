import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";

export const routes: Routes = [
    { path: '', component: AppComponent },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: LoginComponent // mudar para 404 not found
    },
]