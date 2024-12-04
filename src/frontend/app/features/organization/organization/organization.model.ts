import { BaseModel } from "src/frontend/app/core/models/base.model";

export interface Organization extends BaseModel {
    name: string,
    description?: string,
    email?: string,
    is_approved?: boolean
}

export interface OrganizationRegisterStudent {
    user: number
}
