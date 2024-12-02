import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Membership } from './membership.model';
import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse } from '../../core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class MembershipService {
    endpointURL = '/membership/';

    constructor(private apiService: ApiService) {}

    getMembership(id: number): Observable<Membership> {
        return this.apiService.getOne<Membership>(`${this.endpointURL}${id}`);
    }

    getMemberships(): Observable<PaginatedResponse<Membership>> {
        return this.apiService.get<Membership>(this.endpointURL);
    }

    createMembership(membership: Membership): Observable<Membership> {
        return this.apiService.post<Membership>(this.endpointURL, membership);
    }

    updateMembership(membership: Membership): Observable<Membership> {
        return this.apiService.put<Membership>(this.endpointURL, membership);
    }

    deleteMembership(id: number): Observable<Membership> {
        return this.apiService.delete<Membership>(`${this.endpointURL}${id}`);
    }
}