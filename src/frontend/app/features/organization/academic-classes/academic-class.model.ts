import { BaseModel } from "../../../core/models/base.model";
import { User } from "../../account/models/user.interface";
import { Organization } from "../organization/organization.model";

export interface AcademicClass extends BaseModel {
    teacher: User,
    students: User[],
    organization: Organization
}
