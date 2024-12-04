import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './student-panel.component.html'
})
export class StudentPanelComponent {
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

  navigateTo(path: string): void {
    this.router.navigate([path]); 
  }
}
