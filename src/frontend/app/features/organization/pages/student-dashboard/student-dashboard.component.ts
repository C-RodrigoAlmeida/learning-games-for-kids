import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './student-dashboard.component.html'
})
export class StudentDashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

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
}
