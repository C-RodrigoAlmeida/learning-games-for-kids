import { User } from "../../account/models/user.interface";
import { Organization } from "../organization/organization.model";
import { BaseModel } from "src/frontend/app/core/models/base.model";

export interface Membership extends BaseModel{
    role?: string,
    user?: User,
    organization?: Organization,
    is_active?: boolean
}

export interface MembershipRegistration {
    role: string,
    organization: number
}