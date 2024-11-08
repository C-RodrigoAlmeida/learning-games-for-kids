import { BaseModel } from "../../../core/models/base.model";

export interface Exercise extends BaseModel{
    id: number,
    correct_word: number,
    wrong_words: number[],
    is_public: boolean,
    organization: number
}
