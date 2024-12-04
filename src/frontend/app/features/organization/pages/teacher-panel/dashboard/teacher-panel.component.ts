import { Component } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { Router } from '@angular/router';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';
import { CalendarComponent } from 'src/frontend/app/shared/components/calendar/calendar.component';
@Component({
    selector: 'app-selection',
    standalone: true,
    imports: [SidebarComponent],
    templateUrl: './teacher-panel.component.html'
})
export class TeacherPanelComponent {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
