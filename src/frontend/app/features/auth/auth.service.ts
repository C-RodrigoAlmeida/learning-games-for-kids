import { tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { LoginCredentials, Session } from './models/auth.model';
import { Membership } from '../organization/membership/membership.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = '/auth';

  constructor(private apiService: ApiService) {
    this.checkSession();
  }

  login(credentials: LoginCredentials): Observable<void> {
    return this.apiService.post<void>(`${this.endpoint}/login/`, credentials);
  }

  logout(): Observable<void> {
    return this.apiService.post<void>(`${this.endpoint}/logout/`, {});
  }

  checkSession(): Observable<Session> {
    return this.apiService.getOne<Session>(`${this.endpoint}/session/`).pipe(
      map((response: Session) => {
        if (response) {
          return response;
        } else {
          throw new Error('No session found');
        }
      }),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }

  createSessionMembership(session: Membership): Observable<Membership> {
    return this.apiService.post<Membership>(`${this.endpoint}/session/`, session).pipe(
      tap((response: Membership) => {
        console.log(response);
      })
    );
  }
}
