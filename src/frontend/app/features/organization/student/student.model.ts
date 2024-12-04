import { BaseModel } from "../../../core/models/base.model";
import { User } from "../../account/models/user.interface";
import { Organization } from "../organization/organization.model";

export interface Student extends BaseModel {
    role: string,
    is_active: boolean,
    user: User
    organization: Organization
}
