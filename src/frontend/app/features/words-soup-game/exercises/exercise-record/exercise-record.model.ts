import { Exercise } from "../exercise/exercise.model";
import { BaseModel } from "../../../core/models/base.model";
import { User } from "src/frontend/app/accounts/user.model";
import { ExerciseSchedule } from "../exercise-schedule/exercise-schedule.model";
import { Organization } from "src/frontend/app/organization/organization/organization.model";

export interface ExerciseRecord extends BaseModel{
    exercise: Exercise,
    organization: Organization,
    schedule: ExerciseSchedule,
    student: User
}
