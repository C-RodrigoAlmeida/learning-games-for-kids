import { Routes } from "@angular/router";

import { AuthGuard } from "./core/guards/auth.guard";
import { ProfileComponent } from "./features/account/profile/profile.component";
import { LoginComponent } from "./features/auth/components/login/login.component";
import { CalendarComponent } from "./shared/components/calendar/calendar.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { NotFoundComponent } from "./features/auth/components/not-found/not-found.component";
import { OrgRegisterComponent } from "./features/organization/pages/org-register/org-register.component";
import { TeacherPanelComponent } from "./features/organization/pages/teacher-panel/dashboard/teacher-panel.component";
import { StudentPanelComponent } from "./features/organization/pages/student-panel/student-panel.component";
import { OrganizationSelectionComponent } from "./features/organization/pages/org-selection/org-selection.component";
import { MembershipRegisterComponent } from "./features/organization/pages/membership-register/membership-register.component";
import { StudentsListComponent } from "./features/organization/pages/teacher-panel/student-list/students-list.component";
import { WordRegistrationComponent } from "./features/words-soup-game/pages/word-registration/word-registration.component";
import { ExerciseRegistrationComponent } from "./features/words-soup-game/pages/exercise-registration/exercise-registration.component";
import { PlayComponent } from "./features/words-soup-game/pages/play/play.component";
import { ExerciseListComponent } from "./features/words-soup-game/pages/exercise-list/exercise-list.component";
import { ExerciseScheduleComponent } from "./features/organization/pages/teacher-panel/exercise-schedule/exercise-schedule.component";
import { ClassRegisterComponent } from "./features/organization/pages/teacher-panel/class-register/class-register.component";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
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
        path: 'membership/register/:id',
        component: MembershipRegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'organization/selection',
        component: OrganizationSelectionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'organization/register',
        component: OrgRegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/panel',
        component: StudentPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'teacher/panel',
        component: TeacherPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'teacher-panel/students',
        component: StudentsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'word/registration',
        component: WordRegistrationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exercises',
        component: ExerciseListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exercise/registration',
        component: ExerciseRegistrationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exercise/schedule/:id',
        component: ExerciseScheduleComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'class/register',
        component: ClassRegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'play',
        component: PlayComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
]
