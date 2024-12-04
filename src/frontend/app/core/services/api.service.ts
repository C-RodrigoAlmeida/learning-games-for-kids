import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginatedResponse } from '../models/paginated-response.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }


    getUrl(): string {
        return this.apiUrl;
    }

    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<PaginatedResponse<T>> {
        return this.http.get<PaginatedResponse<T>>(`${this.apiUrl}${path}`, { params });
    }

    getOne<T>(path: string): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}${path}`);
    }

    post<T>(path: string, body: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}${path}`, body);
    }

    put<T>(path: string, body: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}${path}`, body);
    }

    patch<T>(path: string, body: any): Observable<T> {
        return this.http.patch<T>(`${this.apiUrl}${path}`, body);
    }

    delete<T>(path: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}${path}`);
    }
}
