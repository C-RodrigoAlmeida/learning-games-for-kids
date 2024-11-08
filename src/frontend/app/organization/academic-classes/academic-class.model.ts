import { BaseModel } from "../../core/models/base.model";

export interface AcademicClass extends BaseModel {
    teacher: number,
    students: number[]
}
