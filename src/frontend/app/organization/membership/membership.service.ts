import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { Membership } from './membership.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/membership/';

    constructor(private http: HttpClient) {
        super();
    }

    getMembership(id: number): Observable<Membership> {
        return this.http.get<Membership>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError))
    }

    getMemberships(): Observable<Membership[]> {
        return this.http.get<Membership[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createMembership(membership: Membership): Observable<Membership> {
        return this.http.post<Membership>(
            this.UrlServiceV1 + this.endpointName,
            membership,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    updateMembership(membership: Membership): Observable<Membership> {
        return this.http.put<Membership>(
            this.UrlServiceV1 + this.endpointName + membership.id,
            membership,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    deleteMembership(id: number): Observable<Membership> {
        return this.http.delete<Membership>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        )
    }
}
