import { BaseModel } from "src/frontend/app/core/models/base.model";
import { Word } from "../../words/words.model";
import { Organization } from "../../../organization/organization/organization.model";
export interface Exercise extends BaseModel{
    title: string,
    correct_word: Word,
    wrong_words: Word[],
    is_public?: boolean,
    organization?: Organization
}
