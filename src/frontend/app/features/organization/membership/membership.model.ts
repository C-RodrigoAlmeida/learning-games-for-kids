import { BaseModel } from "src/frontend/app/core/models/base.model";
import { User } from "../../account/models/user.interface";
import { Organization } from "../organization/organization.model";

export interface Membership extends BaseModel{
    role: string,
    user: User,
    organization: Organization
}