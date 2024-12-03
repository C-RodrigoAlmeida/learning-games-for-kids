import { map, Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../features/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkSession().pipe(
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        }
        
        return true;
      })
    );
  }
} 