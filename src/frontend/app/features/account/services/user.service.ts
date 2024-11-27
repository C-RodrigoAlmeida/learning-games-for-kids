import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { User } from '../models/user.interface';
import { PaginatedResponse } from '../../../core/models/paginated-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = '/account/users/';

  constructor(private apiService: ApiService) {}

  getCurrentUser(): Observable<User> {
    return this.apiService.getOne<User>(`${this.path}me/`);
  }

  getUsers(): Observable<PaginatedResponse<User>> {
    return this.apiService.get<User>(this.path);
  }

  getUser(id: number): Observable<User> {
    return this.apiService.getOne<User>(`${this.path}${id}/`);
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.apiService.post<User>(this.path, user);
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.apiService.put<User>(`${this.path}${id}/`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.path}${id}/`);
  }
} 