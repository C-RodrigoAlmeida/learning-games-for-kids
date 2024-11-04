import { LoginComponent } from "./accounts/login/login.component";
import { AppComponent } from "./app.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'home',
        loadComponent: () => import('./nav/home/home.component')
            .then(m => m.HomeComponent)
    },
    // {
    //     path: 'account',
    //     loadChildren: () => import('./accounts/login/login.component')
    //         .then(m => m.LoginComponent)
    // },
    {
        path: '**',
        component: LoginComponent // mudar para 404 not found
    },
]