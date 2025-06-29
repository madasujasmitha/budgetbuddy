"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Clock, Zap, ChevronRight } from "lucide-react"

export function DailyQuests() {
  const quests = [
    {
      id: 1,
      title: "Track an Expense",
      description: "Log any purchase you make today",
      xp: 25,
      coins: 10,
      completed: true,
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Check Your Goals",
      description: "Review progress on your savings goals",
      xp: 15,
      coins: 5,
      completed: true,
      difficulty: "Easy",
    },
    {
      id: 3,
      title: "Learn Something New",
      description: "Read a financial tip or article",
      xp: 30,
      coins: 15,
      completed: false,
      difficulty: "Medium",
    },
    {
      id: 4,
      title: "Plan Tomorrow",
      description: "Set a spending plan for tomorrow",
      xp: 40,
      coins: 20,
      completed: false,
      difficulty: "Medium",
    },
  ]

  const completedQuests = quests.filter((q) => q.completed).length
  const totalQuests = quests.length
  const progressPercentage = (completedQuests / totalQuests) * 100

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            Daily Quests
            <Badge variant="secondary" className="ml-2">
              {completedQuests}/{totalQuests}
            </Badge>
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Progress Overview */}
        <div className="mb-4 p-3 bg-primary/10 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Today's Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-2" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Keep going! You're doing great!</span>
            <span>+{quests.reduce((sum, q) => (q.completed ? sum + q.xp : sum), 0)} XP earned</span>
          </div>
        </div>

        {/* Quest List */}
        <div className="space-y-2">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`p-3 rounded-lg border transition-colors ${
                quest.completed
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-200 hover:border-primary/30 cursor-pointer"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  {quest.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`font-medium text-sm ${quest.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {quest.title}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <Badge className={getDifficultyColor(quest.difficulty)}>{quest.difficulty}</Badge>
                    </div>
                  </div>

                  <p
                    className={`text-xs mb-2 ${quest.completed ? "line-through text-muted-foreground" : "text-muted-foreground"}`}
                  >
                    {quest.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center">
                        <Zap className="mr-1 h-3 w-3 text-yellow-600" />
                        <span>{quest.xp} XP</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">🪙</span>
                        <span>{quest.coins} coins</span>
                      </div>
                    </div>

                    {!quest.completed && (
                      <Button size="sm" variant="outline" className="h-6 text-xs px-2 bg-transparent">
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Bonus */}
        {completedQuests === totalQuests ? (
          <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
            <div className="text-center">
              <div className="text-2xl mb-1">🎉</div>
              <p className="text-sm font-medium text-green-700">All Quests Complete!</p>
              <p className="text-xs text-green-600">Bonus: +50 XP, +25 coins</p>
            </div>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-accent/10 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-medium">Complete all quests for bonus rewards!</p>
              <p className="text-xs text-muted-foreground">+50 XP, +25 coins waiting</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
