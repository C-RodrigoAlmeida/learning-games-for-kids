import { BaseModel } from "../../core/models/base.model";

export interface AcademicClassesModel extends BaseModel {
    teacher: number,
    students: number[]
}
