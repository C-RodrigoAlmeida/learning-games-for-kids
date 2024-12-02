import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Organization } from './organization.model';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class OrganizationService {
    page: any;
    rows: any;
    search = '';
    endpointURL = '/organization/';

    constructor(private apiService: ApiService) {}

    getOrganization(id: number): Observable<Organization> {
        return this.apiService.getOne<Organization>(`${this.endpointURL}${id}`);
    }

    getOrganizations(): Observable<PaginatedResponse<Organization>> {
        return this.apiService.get<Organization>(this.endpointURL);
    }

    createOrganization(organization: Organization): Observable<Organization> {
        return this.apiService.post<Organization>(this.endpointURL, organization);
    }

    updateOrganization(organization: Organization): Observable<Organization> {
        return this.apiService.put<Organization>(this.endpointURL, organization);
    }

    deleteOrganization(id: number): Observable<Organization> {
        return this.apiService.delete<Organization>(`${this.endpointURL}${id}`);
    }
}
