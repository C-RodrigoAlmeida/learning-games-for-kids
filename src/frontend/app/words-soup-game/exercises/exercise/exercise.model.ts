export interface Exercise {
    id: number,
    correct_word: number,
    wrong_words: number[],
    is_public: boolean,
    organization: number
}
