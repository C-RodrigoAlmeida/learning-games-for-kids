import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { LoginCredentials, AuthResponse } from './models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = '/accounts';
  private authStatus = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<any>(null);

  constructor(private apiService: ApiService) {
    this.checkAuthStatus();
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>(`${this.endpoint}/login/`, credentials).pipe(
      tap((response: AuthResponse) => {
        this.authStatus.next(true);
        this.currentUser.next(response.user);
      })
    );
  }

  logout(): Observable<void> {
    return this.apiService.post<void>(`${this.endpoint}/logout/`, {}).pipe(
      tap(() => {
        this.authStatus.next(false);
        this.currentUser.next(null);
      })
    );
  }

  checkAuthStatus(): void {
    this.apiService.getOne<AuthResponse>(`${this.endpoint}/session/`)
      .subscribe({
        next: (response) => {
          this.authStatus.next(true);
          this.currentUser.next(response.user);
        },
        error: () => {
          this.authStatus.next(false);
          this.currentUser.next(null);
        }
      });
  }
}
