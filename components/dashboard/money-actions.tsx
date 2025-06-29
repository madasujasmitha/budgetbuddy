"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Target, TrendingUp, Coins, Zap } from "lucide-react"

export function MoneyActions() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const actions = [
    {
      id: "add-income",
      title: "Add Income",
      description: "Log money you've earned",
      icon: Plus,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      reward: "+25 XP",
    },
    {
      id: "track-expense",
      title: "Track Expense",
      description: "Record what you spent",
      icon: Minus,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      reward: "+15 XP",
    },
    {
      id: "set-goal",
      title: "Set New Goal",
      description: "Create a savings target",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      reward: "+50 XP",
    },
    {
      id: "view-progress",
      title: "View Progress",
      description: "Check your financial journey",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      reward: "+10 XP",
    },
  ]

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl flex items-center">
          <Coins className="mr-2 h-6 w-6 text-primary" />
          Money Actions
          <Badge variant="secondary" className="ml-2">
            <Zap className="mr-1 h-3 w-3" />
            Earn XP
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action) => {
            const Icon = action.icon
            const isSelected = selectedAction === action.id

            return (
              <Card
                key={action.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected ? `border-2 ${action.borderColor} ${action.bgColor}` : "border hover:border-primary/30"
                }`}
                onClick={() => setSelectedAction(isSelected ? null : action.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${action.bgColor}`}>
                      <Icon className={`h-5 w-5 ${action.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {action.reward}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t">
                      <Button size="sm" className="w-full">
                        Start {action.title}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">$2,500</div>
            <div className="text-xs text-muted-foreground">Total Saved</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">3</div>
            <div className="text-xs text-muted-foreground">Active Goals</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">7</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
