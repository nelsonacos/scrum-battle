import { create } from "zustand";
import questionsData from "../data/questions.json";
import { QuizStore,  Question } from "../types";

const getRandomQuestions = (): Question[] => {
  const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
};

export const useQuizStore = create<QuizStore>((set, get) => ({
  questions: getRandomQuestions(),
  currentQuestionIndex: 0,
  score: 0,

  selectAnswer: (answerIndex: number) => {
    const { questions, currentQuestionIndex, score } = get();
    const question = questions[currentQuestionIndex];
    const isCorrect = question.correctAnswer === answerIndex;

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...question,
      userSelectedAnswer: answerIndex,
      isCorrectUserAnswer: isCorrect,
    };

    set({
      questions: updatedQuestions,
      score: isCorrect ? score + 1 : score,
    });
  },

  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get();
    if (currentQuestionIndex < questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  resetQuiz: () => {
    set({
      questions: getRandomQuestions(),
      currentQuestionIndex: 0,
      score: 0,
    });
  },
}));