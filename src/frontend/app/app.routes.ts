import { LoginComponent } from "./accounts/login/login.component";
import { AppComponent } from "./app.component";
import { Routes } from "@angular/router";
import { WordListComponent } from "./words-soup-game/words/word-list/word-list.component";

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
    {
        path: 'word-list',  
        component: WordListComponent
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