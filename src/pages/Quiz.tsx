import { FileQuestion, SkipForward, TimerReset } from "lucide-react";
import clsx from "clsx";
import { useQuizStore } from "../store/useQuizStore";
import { CountdownTimer, Celebration } from "../components";

export const QuizPage = () => {
    const { questions, currentQuestionIndex, selectAnswer, nextQuestion, score, resetQuiz } = useQuizStore();
    const question = questions[currentQuestionIndex];
    const isGameWon = score === 10
    const quizCompleted = currentQuestionIndex + 1 === questions.length;
    return (
        <div className="min-h-screen bg-[#EFF2F7] flex items-center justify-center p-4">
            {isGameWon && <Celebration show />}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-2 bg-orange-500" />

                <div className="px-6 py-3">
                    <h2 className="text-xl text-center text-white bg-[#48BAFE] rounded-2xl py-6 px-4 mb-3">
                        {question.question}
                    </h2>

                    <div>
                        {question.answers.map((answer: string, index: number) => {
                            const isSelected = question.userSelectedAnswer === index;
                            const isCorrect = question.correctAnswer === index;
                            const hasAnswered = question.userSelectedAnswer !== null;

                            return (
                                <button
                                    key={index}
                                    disabled={hasAnswered}
                                    onClick={() => selectAnswer(index)}
                                    className={clsx(
                                        "answerButton transition-all duration-300 border border-gray-300 rounded-lg px-4 py-2 w-full flex justify-between items-center",
                                        {
                                            "bg-emerald-100 border-emerald-500": isSelected && isCorrect,
                                            "bg-red-200 border-red-500": isSelected && !isCorrect,
                                            "opacity-50": hasAnswered && !isSelected,
                                            "hover:bg-gray-200": !hasAnswered,
                                        }
                                    )}
                                >
                                    <span className="text-gray-600">{index + 1}</span>
                                    <span className="flex-1">{answer}</span>

                                    {isSelected && (
                                        <div
                                            className={clsx(
                                                "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                                                isCorrect ? "border-emerald-500" : "border-red-500"
                                            )}
                                        >
                                            <div
                                                className={clsx(
                                                    "w-3 h-3 rounded-full",
                                                    isCorrect ? "bg-emerald-500" : "bg-red-500"
                                                )}
                                            />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="border-t border-gray-200 p-4 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 text-gray-700">
                        <FileQuestion size={18} className="text-gray-500" />
                        <span className="font-semibold">{currentQuestionIndex + 1}/{questions.length}</span>
                    </div>
                    <CountdownTimer key={currentQuestionIndex} duration={20} onTimeout={nextQuestion} />
                    {!quizCompleted ? (
                        <button
                            onClick={nextQuestion}
                            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 transition-colors cursor-pointer"
                        >
                            <SkipForward size={20} />
                            <span className="font-semibold">Skip</span>
                        </button>
                    ) : (
                        <button
                            onClick={resetQuiz}
                            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 transition-colors cursor-pointer"
                        >
                            <TimerReset size={20} />
                            <span className="font-semibold">Reset Quiz</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};