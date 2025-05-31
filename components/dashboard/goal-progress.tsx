"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

export function GoalProgress() {
  // Sample goal data
  const goal = {
    name: "Nike Air Jordan 1",
    target: 150,
    current: 85,
    deadline: "July 15, 2024",
  }

  // Calculate percentage
  const percentage = Math.round((goal.current / goal.target) * 100)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-teal-500" />
          <CardTitle className="text-base">Savings Goal</CardTitle>
        </div>
        <CardDescription>Track your progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">{goal.name}</h3>
            <p className="text-xs text-muted-foreground">Target date: {goal.deadline}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">${goal.current}</span>
              <span className="text-muted-foreground">of ${goal.target}</span>
            </div>
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{percentage}% complete</span>
              <span>${goal.target - goal.current} to go</span>
            </div>
          </div>

          <div className="rounded-md bg-muted p-2">
            <p className="text-xs">
              At your current savings rate, you'll reach your goal in <span className="font-medium">4 weeks</span>.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
