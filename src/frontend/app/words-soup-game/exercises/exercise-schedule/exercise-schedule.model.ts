import { BaseModel } from "../../../core/models/base.model";

export interface ExerciseSchedule extends BaseModel {
    exercise: number,
    deadline: Date,
    organization: number,
    created_by: number
}
