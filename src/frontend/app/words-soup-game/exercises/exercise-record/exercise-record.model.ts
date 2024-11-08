import { BaseModel } from "../../../core/models/base.model";

export interface ExerciseRecord extends BaseModel{
    exercise: number,
    organization: number,
    schedule: number,
    student: number
}
