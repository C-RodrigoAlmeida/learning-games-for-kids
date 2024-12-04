import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization.model';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';
import { AcademicClass } from '../academic-classes/academic-class.model';

@Injectable({
    providedIn: 'root',
})
export class OrganizationService {
    endpointURL = '/organization/';

    constructor(private apiService: ApiService) {}

    getMemberOrganizations(): Observable<PaginatedResponse<Organization>> {
        return this.apiService.get<Organization>('/membership/organizations');
    }

    getNotMemberOrganizations(): Observable<PaginatedResponse<Organization>> {
        return this.apiService.get<Organization>('/membership/organizations/not-member');
    }

    getAcademicClasses(): Observable<PaginatedResponse<AcademicClass>> {
        return this.apiService.get<AcademicClass>(`${this.endpointURL}academic_classes`);
    }

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
