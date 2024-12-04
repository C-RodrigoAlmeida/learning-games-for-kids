import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/frontend/app/features/auth/auth.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    logout(): void {
        this.authService.logout().subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            error: (error) => {
                console.error('Error during logout:', error);
                this.router.navigate(['/login']);
            }
        });
    }

    redirectToPanel(): void {
        this.authService.checkSession().subscribe({
            next: (res) => {
                if (res.membership.role == "admin" || res.membership.role == "teacher") {
                    this.router.navigate(['/teacher/panel']);
                } else {
                    this.router.navigate(['/student/panel']);
                }
            },
            error: (error) => {
                console.error('Error: ', error);
                // this.router.navigate(['/login']);
            }
        });
    }

    redirectTo(url: string): void {
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([url]))
    }
}
