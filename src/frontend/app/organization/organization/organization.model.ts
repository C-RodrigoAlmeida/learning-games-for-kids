import { BaseModel } from "../../core/models/base.model";

export interface Organization extends BaseModel {
    name: string,
    description: string
}