import { User } from "../../account/models/user.interface";
import { Organization } from "../organization/organization.model";
import { BaseModel } from "src/frontend/app/core/models/base.model";

export interface Membership extends BaseModel {
    role?: string,
    user?: User,
    organization?: Organization,
    is_active?: boolean
}

export interface MembershipRegistration {
    role: string,
    organization: number
}

export interface MembershipView {
    id: number,
    student_name: string,
    organization_id: number,
    organization_name: string,
    email: string,
    is_active: boolean
}

export interface MembershipUpdate {
    is_active?: boolean
}
