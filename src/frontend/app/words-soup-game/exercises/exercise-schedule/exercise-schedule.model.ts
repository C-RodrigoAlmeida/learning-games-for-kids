import { Exercise } from "../exercise/exercise.model";
import { BaseModel } from "../../../core/models/base.model";
import { User } from "src/frontend/app/accounts/user.model";
import { Organization } from "src/frontend/app/organization/organization/organization.model";

export interface ExerciseSchedule extends BaseModel {
    deadline: Date,
    exercise?: Exercise,
    organization?: Organization,
    created_by?: User
}
