import { Routes } from "@angular/router";

import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { ProfileComponent } from "./features/account/profile/profile.component";
import { NotFoundComponent } from "./features/auth/components/not-found/not-found.component";
import { SelectionComponent } from "./features/organization/pages/selection/selection.component";
import { StudentPanelComponent } from "./features/organization/pages/student-panel/student-panel.component";
import { OrgRegisterComponent } from "./features/organization/pages/org-register/org-register.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { TeacherPanelComponent } from "./features/organization/pages/teacher-panel/teacher-panel.component";
import { CalendarComponent } from "./shared/components/calendar/calendar.component";

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
        canActivate: [AuthGuard]
    },
    {
        path: 'organization',
        component: SelectionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'organization/register',
        component: OrgRegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student-panel',
        component: StudentPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'teacher-panel',
        component: TeacherPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
]