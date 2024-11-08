export interface ExerciseSchedule {
    id: number,
    created_at: Date,
    updated_at: Date,
    exercise: number,
    deadline: Date,
    organization: number,
    created_by: number
}
