import { LoginComponent } from "./accounts/login/login.component";
import { AppComponent } from "./app.component";
import { Routes } from "@angular/router";
import { WordListComponent } from "./words-soup-game/words/word-list/word-list.component";
import { ExerciseScheduleListComponent } from "./words-soup-game/exercises/exercise-schedule/exercise-schedule-list/exercise-schedule-list.component";

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
        path: 'words',  
        component: WordListComponent
    },
    {
        path: 'exercise-schedules',
        component: ExerciseScheduleListComponent
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