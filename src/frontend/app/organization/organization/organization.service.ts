import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { Organization } from './organization.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/organization/';

    constructor(private http: HttpClient) {
        super();
    }

    getOrganization(id: number): Observable<Organization> {
        return this.http.get<Organization>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError))
    }

    getOrganizations(): Observable<Organization[]> {
        return this.http.get<Organization[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createOrganization(organization: Organization): Observable<Organization> {
        return this.http.post<Organization>(
            this.UrlServiceV1 + this.endpointName,
            organization,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    updateOrganization(organization: Organization): Observable<Organization> {
        return this.http.put<Organization>(
            this.UrlServiceV1 + this.endpointName + organization.id,
            organization,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    deleteOrganization(id: number): Observable<Organization> {
        return this.http.delete<Organization>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        )
    }
}
