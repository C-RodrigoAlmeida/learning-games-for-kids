import { BaseModel } from "../../core/models/base.model";
import { User } from "../../accounts/user.model"
import { Organization } from "../organization/organization.model";

export interface Membership extends BaseModel{
    role: string,
    user: User,
    organization: Organization
}