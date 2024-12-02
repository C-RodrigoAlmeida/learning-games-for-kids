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

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
