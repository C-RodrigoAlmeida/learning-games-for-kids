import { Organization } from "../../organization/organization/organization.model";

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface Session {
    user: {
        username: string;
        email: string;
        first_name: string;
        last_name: string;
    },
    membership: {
        role: string,
        is_active: boolean
        organization: Organization,
    }
}
