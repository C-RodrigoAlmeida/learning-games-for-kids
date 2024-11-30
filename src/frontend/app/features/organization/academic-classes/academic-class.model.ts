import { BaseModel } from "../../core/models/base.model";
import { User } from "src/frontend/app/accounts/user.model";
import { Organization } from "../organization/organization.model";

export interface AcademicClass extends BaseModel {
    teacher: User,
    students: User[],
    organization: Organization
}
