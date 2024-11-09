import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./accounts/login/login.component";
import { WordListComponent } from "./words-soup-game/words/word-list/word-list.component";
import { MembershipListComponent } from "./organization/membership/membership-list/membership-list.component";
import { ExerciseListComponent } from "./words-soup-game/exercises/exercise/exercise-list/exercise-list.component";
import { OrganizationListComponent } from "./organization/organization/organization-list/organization-list.component";
import { AcademicClassesListComponent } from "./organization/academic-classes/academic-classes-list/academic-classes-list.component";
import { ExerciseRecordListComponent } from "./words-soup-game/exercises/exercise-record/exercise-record-list/exercise-record-list.component";
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
    // TODOS ESTES ABAIXO SÃO PARA TESTES, DEPOIS REMOVER:
    {
        path: 'words',  
        component: WordListComponent
    },
    {
        path: 'exercise-schedules',
        component: ExerciseScheduleListComponent
    },
    {
        path: 'exercise-records',
        component: ExerciseRecordListComponent
    },
    {
        path: 'exercises',
        component: ExerciseListComponent
    },
    {
        path: 'organizations',
        component: OrganizationListComponent
    },
    {
        path: 'memberships',
        component: MembershipListComponent
    },
    {
        path: 'academic-classes',
        component: AcademicClassesListComponent
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