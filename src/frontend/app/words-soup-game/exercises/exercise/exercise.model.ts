import { BaseModel } from "../../../core/models/base.model";
import { Word } from "../../words/words.model";
import { Organization } from "../../../organization/organization/organization.model";
export interface Exercise extends BaseModel{
    id: number,
    correct_word: Word,
    wrong_words: Word[],
    is_public?: boolean,
    organization?: Organization
}
