"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sparkles, TrendingUp, Calendar, DollarSign, ChevronRight } from "lucide-react"

export function FutureImpact() {
  const projections = [
    {
      timeframe: "1 Year",
      savings: 3000,
      growth: 12,
      confidence: 85,
    },
    {
      timeframe: "5 Years",
      savings: 18000,
      growth: 45,
      confidence: 75,
    },
    {
      timeframe: "10 Years",
      savings: 45000,
      growth: 120,
      confidence: 65,
    },
  ]

  const milestones = [
    {
      goal: "First $1,000",
      progress: 2500,
      target: 1000,
      completed: true,
      icon: "🎯",
    },
    {
      goal: "Emergency Fund",
      progress: 2500,
      target: 5000,
      completed: false,
      icon: "🛡️",
    },
    {
      goal: "College Fund",
      progress: 2500,
      target: 20000,
      completed: false,
      icon: "🎓",
    },
  ]

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            Future Impact
          </CardTitle>
          <Button variant="outline" size="sm">
            Full Forecast
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Current Trajectory */}
        <div className="mb-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">$2,500</div>
            <p className="text-sm text-muted-foreground">Current Savings</p>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600 font-medium">+15% this month</span>
            </div>
          </div>
        </div>

        {/* Future Projections */}
        <div className="space-y-3 mb-4">
          <h4 className="text-sm font-medium">Savings Projections</h4>
          {projections.map((projection, index) => (
            <div key={index} className="p-2 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{projection.timeframe}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {projection.confidence}% confidence
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Projected Savings:</span>
                <span className="font-bold text-green-600">${projection.savings.toLocaleString()}</span>
              </div>
              <div className="mt-1">
                <Progress value={projection.confidence} className="h-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="space-y-3 mb-4">
          <h4 className="text-sm font-medium">Financial Milestones</h4>
          {milestones.map((milestone, index) => {
            const progressPercentage = Math.min((milestone.progress / milestone.target) * 100, 100)

            return (
              <div key={index} className="p-2 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{milestone.icon}</span>
                    <span className="text-sm font-medium">{milestone.goal}</span>
                  </div>
                  {milestone.completed && (
                    <Badge variant="default" className="text-xs bg-green-600">
                      Completed
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span>
                      ${milestone.progress.toLocaleString()} / ${milestone.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Impact Summary */}
        <div className="p-3 bg-accent/10 rounded-lg">
          <div className="text-center">
            <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Your Financial Future</p>
            <p className="text-xs text-muted-foreground">At this rate, you'll be financially independent by age 25!</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Sparkles className="mr-2 h-4 w-4" />
            Explore Scenarios
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
