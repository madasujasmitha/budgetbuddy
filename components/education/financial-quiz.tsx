"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Trophy, Brain, Sparkles } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "beginner" | "intermediate" | "advanced"
  category: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the 50/30/20 budgeting rule?",
    options: [
      "50% savings, 30% needs, 20% wants",
      "50% needs, 30% wants, 20% savings",
      "50% wants, 30% savings, 20% needs",
      "50% income, 30% expenses, 20% taxes",
    ],
    correctAnswer: 1,
    explanation:
      "The 50/30/20 rule suggests allocating 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment.",
    difficulty: "beginner",
    category: "Budgeting",
  },
  {
    id: 2,
    question: "What is compound interest?",
    options: [
      "Interest paid only on the principal amount",
      "Interest paid on both principal and previously earned interest",
      "Interest that compounds monthly",
      "Interest that never changes",
    ],
    correctAnswer: 1,
    explanation:
      "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It's often called 'interest on interest.'",
    difficulty: "intermediate",
    category: "Investing",
  },
  {
    id: 3,
    question: "How much should you ideally have in an emergency fund?",
    options: ["1-2 months of expenses", "3-6 months of expenses", "1 year of expenses", "Whatever you can afford"],
    correctAnswer: 1,
    explanation:
      "Financial experts typically recommend having 3-6 months of living expenses saved in an emergency fund to cover unexpected costs like job loss or medical bills.",
    difficulty: "beginner",
    category: "Saving",
  },
  {
    id: 4,
    question: "What is opportunity cost?",
    options: [
      "The cost of buying something expensive",
      "The value of the next best alternative you give up",
      "The cost of missing an opportunity",
      "The price difference between two items",
    ],
    correctAnswer: 1,
    explanation:
      "Opportunity cost is the value of the next best alternative that you give up when making a choice. For example, if you spend $20 on a movie, the opportunity cost might be the book you could have bought instead.",
    difficulty: "intermediate",
    category: "Economics",
  },
  {
    id: 5,
    question: "What's the best strategy for a teenager starting to invest?",
    options: [
      "Put all money in one stock",
      "Only invest in cryptocurrency",
      "Start with diversified index funds",
      "Wait until you're older",
    ],
    correctAnswer: 2,
    explanation:
      "For beginners, especially teenagers, diversified index funds are often the best starting point because they spread risk across many companies and require less research than individual stocks.",
    difficulty: "advanced",
    category: "Investing",
  },
]

interface FinancialQuizProps {
  onComplete?: (score: number, totalQuestions: number) => void
}

export function FinancialQuiz({ onComplete }: FinancialQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === question.correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    setAnswers([...answers, selectedAnswer])
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
      onComplete?.(score, quizQuestions.length)
    }
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80)
      return { message: "Excellent! You're a financial wizard! 🧙‍♂️", color: "text-green-600", xp: 200 }
    if (percentage >= 60)
      return { message: "Great job! You're on the right track! 🎯", color: "text-blue-600", xp: 150 }
    if (percentage >= 40) return { message: "Good effort! Keep learning! 📚", color: "text-yellow-600", xp: 100 }
    return { message: "Keep practicing! Every expert was once a beginner! 💪", color: "text-orange-600", xp: 50 }
  }

  if (quizComplete) {
    const scoreData = getScoreMessage()
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {score}/{quizQuestions.length}
            </div>
            <p className={`text-lg font-medium ${scoreData.color}`}>{scoreData.message}</p>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">XP Earned: +{scoreData.xp}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Great job completing the financial literacy quiz! Keep learning to unlock more achievements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="font-medium text-green-700">Correct Answers</div>
              <div className="text-2xl font-bold text-green-600">{score}</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="font-medium text-blue-700">Accuracy</div>
              <div className="text-2xl font-bold text-blue-600">
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full" onClick={() => window.location.reload()}>
              Take Quiz Again
            </Button>
            <Button variant="outline" className="w-full">
              View Detailed Results
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Financial Literacy Quiz</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs">
            {question.difficulty} • {question.category}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span>
              Score: {score}/{currentQuestion}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswer === index
                    ? showExplanation
                      ? index === question.correctAnswer
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : "border-primary bg-primary/10"
                    : showExplanation && index === question.correctAnswer
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-muted hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showExplanation && (
                    <div>
                      {index === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="h-5 w-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
            <p className="text-blue-800 text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0 || showExplanation}
          >
            Previous
          </Button>
          {!showExplanation ? (
            <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
