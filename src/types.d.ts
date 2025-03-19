export interface Question {
    id: number
    question: string
    code: string
    answers: string[]
    correctAnswer: number
    userSelectedAnswer?: number | null
    isCorrectUserAnswer?: boolean | null
    helpText: string
}

export interface QuizStore {
    questions: Question[];
    currentQuestionIndex: number;
    score: number;
    selectAnswer: (answerIndex: number) => void;
    nextQuestion: () => void;
    resetQuiz: () => void;
}