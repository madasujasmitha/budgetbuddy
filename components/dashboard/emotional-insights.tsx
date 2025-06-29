"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, TrendingUp, AlertCircle, Smile, ChevronRight } from "lucide-react"

export function EmotionalInsights() {
  const currentMood = "Confident"
  const moodScore = 85
  const spendingPattern = "Mindful"

  const insights = [
    {
      type: "positive",
      title: "Great Self-Control",
      description: "You've avoided impulse purchases this week",
      icon: Smile,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      type: "warning",
      title: "Stress Spending Alert",
      description: "You tend to spend more when stressed",
      icon: AlertCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      type: "tip",
      title: "Mood Boost Tip",
      description: "Try the 24-hour rule before big purchases",
      icon: Heart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ]

  const moodHistory = [
    { day: "Mon", mood: "Happy", score: 90 },
    { day: "Tue", mood: "Stressed", score: 60 },
    { day: "Wed", mood: "Excited", score: 95 },
    { day: "Thu", mood: "Calm", score: 80 },
    { day: "Fri", mood: "Confident", score: 85 },
  ]

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Heart className="mr-2 h-5 w-5 text-primary" />
            Emotional Insights
          </CardTitle>
          <Button variant="outline" size="sm">
            Full Report
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Current Mood */}
        <div className="mb-4 p-3 bg-primary/10 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Current Mood</span>
            <Badge variant="secondary">{currentMood}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Emotional Wellness</span>
              <span>{moodScore}/100</span>
            </div>
            <Progress value={moodScore} className="h-2" />
          </div>
        </div>

        {/* Spending Pattern */}
        <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium">Spending Pattern</span>
              <p className="text-xs text-muted-foreground">Based on recent activity</p>
            </div>
            <Badge variant="default" className="bg-green-600">
              {spendingPattern}
            </Badge>
          </div>
        </div>

        {/* Insights */}
        <div className="space-y-2 mb-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <div key={index} className={`p-2 rounded-lg ${insight.bgColor} border border-opacity-20`}>
                <div className="flex items-start space-x-2">
                  <Icon className={`h-4 w-4 ${insight.color} mt-0.5`} />
                  <div className="flex-1">
                    <h5 className="text-xs font-medium">{insight.title}</h5>
                    <p className="text-xs text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mood History */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">This Week's Mood</h4>
          <div className="grid grid-cols-5 gap-1">
            {moodHistory.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
                <div
                  className={`h-8 rounded text-xs flex items-center justify-center ${
                    day.score >= 80
                      ? "bg-green-100 text-green-700"
                      : day.score >= 60
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {day.score}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <TrendingUp className="mr-2 h-4 w-4" />
            Log Today's Mood
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
