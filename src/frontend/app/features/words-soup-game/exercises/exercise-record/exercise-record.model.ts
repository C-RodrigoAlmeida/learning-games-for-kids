import { Exercise } from "../exercise/exercise.model";
import { BaseModel } from "src/frontend/app/core/models/base.model";
import { ExerciseSchedule } from "../exercise-schedule/exercise-schedule.model";
import { Membership } from "../../../organization/membership/membership.model";
import { Word } from "../../words/words.model";

export interface ExerciseRecord extends BaseModel{
    exercise?: Exercise,
    student?: Membership,
    schedule?: ExerciseSchedule,
    selected_words?: Word[],
    amount_of_correct_words?: number,
    amount_of_wrong_words?: number
}
