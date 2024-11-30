import { Exercise } from "../exercise/exercise.model";
import { User } from "../../../account/models/user.interface";
import { BaseModel } from "src/frontend/app/core/models/base.model";
import { Organization } from "../../../organization/organization/organization.model";

export interface ExerciseSchedule extends BaseModel {
    deadline: Date,
    exercise?: Exercise,
    organization?: Organization,
    created_by?: User
}
