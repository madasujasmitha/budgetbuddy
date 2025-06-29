"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Target, TrendingUp, Calendar, ChevronRight } from "lucide-react"

export function QuestProgress() {
  const activeGoals = [
    {
      id: 1,
      title: "New Headphones",
      target: 100,
      current: 45,
      deadline: "2 weeks",
      category: "Electronics",
      priority: "High",
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 500,
      current: 250,
      deadline: "3 months",
      category: "Savings",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Birthday Gift Fund",
      target: 50,
      current: 35,
      deadline: "1 month",
      category: "Gifts",
      priority: "High",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 60) return "bg-blue-500"
    if (percentage >= 40) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Target className="mr-2 h-5 w-5 text-primary" />
            Quest Progress
            <Badge variant="secondary" className="ml-2">
              {activeGoals.length} Active
            </Badge>
          </CardTitle>
          <Button variant="outline" size="sm">
            Manage Goals
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {activeGoals.map((goal) => {
            const progressPercentage = (goal.current / goal.target) * 100
            const remaining = goal.target - goal.current

            return (
              <div key={goal.id} className="p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{goal.title}</h4>
                  <div className="flex items-center space-x-1">
                    <Badge className={getPriorityColor(goal.priority)}>{goal.priority}</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      ${goal.current} / ${goal.target}
                    </span>
                  </div>

                  <div className="relative">
                    <Progress value={progressPercentage} className="h-2" />
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(progressPercentage)}`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{goal.deadline} left</span>
                    </div>
                    <span>${remaining} to go</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {goal.category}
                    </Badge>
                    <span className="text-xs font-medium text-green-600">
                      {Math.round(progressPercentage)}% complete
                    </span>
                  </div>
                </div>

                {progressPercentage >= 100 && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded">
                    <div className="flex items-center justify-center">
                      <span className="text-green-700 text-sm font-medium">🎉 Goal Achieved!</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <div className="text-lg font-bold text-primary">
                {activeGoals.reduce((sum, goal) => sum + goal.current, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Total Saved</div>
            </div>
            <div className="p-2 bg-secondary/10 rounded-lg">
              <div className="text-lg font-bold text-secondary">
                {Math.round(
                  activeGoals.reduce((sum, goal) => sum + (goal.current / goal.target) * 100, 0) / activeGoals.length,
                )}
                %
              </div>
              <div className="text-xs text-muted-foreground">Avg Progress</div>
            </div>
            <div className="p-2 bg-accent/10 rounded-lg">
              <div className="text-lg font-bold text-accent">
                {activeGoals.filter((goal) => goal.current / goal.target >= 1).length}
              </div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
          </div>
        </div>

        {/* Quick Action */}
        <div className="mt-4">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <TrendingUp className="mr-2 h-4 w-4" />
            Add Money to Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
