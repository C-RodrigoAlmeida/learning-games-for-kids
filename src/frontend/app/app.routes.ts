import { Routes } from "@angular/router";

import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { ProfileComponent } from "./features/account/profile/profile.component";
import { NotFoundComponent } from "./features/auth/components/not-found/not-found.component";
import { SelectionComponent } from "./features/organization/pages/selection/selection.component";
import { StudentDashboardComponent } from "./features/organization/pages/student-dashboard/student-dashboard.component";
import { OrgRegisterComponent } from "./features/organization/pages/org-register/org-register.component";
import { authGuard } from "./core/guards/base.guard";

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
        component: ProfileComponent,
        canActivate: [authGuard]
    },
    {
        path: 'organization',
        component: SelectionComponent,
        canActivate: [authGuard]
    },
    {
        path: 'organization/register',
        component: OrgRegisterComponent,
        canActivate: [authGuard]
    },
    {
        path: 'student-dashboard',
        component: StudentDashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
]