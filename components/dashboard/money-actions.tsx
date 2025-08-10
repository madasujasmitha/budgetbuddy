"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Target, TrendingUp, Coins, Zap } from "lucide-react"
import { AddIncomeModal } from "@/components/modals/add-income-modal"
import { AddExpenseModal } from "@/components/modals/add-expense-modal"
import { SetGoalModal } from "@/components/modals/set-goal-modal"
import { ViewProgressModal } from "@/components/modals/view-progress-modal"

type ActionId = "add-income" | "track-expense" | "set-goal" | "view-progress"

export function MoneyActions() {
  const [activeModal, setActiveModal] = useState<ActionId | null>(null)

  const actions: {
    id: ActionId
    title: string
    description: string
    icon: any
    color: string
    bgColor: string
    reward: string
  }[] = [
    {
      id: "add-income",
      title: "Add Income",
      description: "Log money you've earned",
      icon: Plus,
      color: "text-green-600",
      bgColor: "bg-green-50",
      reward: "+25 XP",
    },
    {
      id: "track-expense",
      title: "Track Expense",
      description: "Record what you spent",
      icon: Minus,
      color: "text-red-600",
      bgColor: "bg-red-50",
      reward: "+15 XP",
    },
    {
      id: "set-goal",
      title: "Set New Goal",
      description: "Create a savings target",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      reward: "+50 XP",
    },
    {
      id: "view-progress",
      title: "View Progress",
      description: "See your trends and stats",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      reward: "+10 XP",
    },
  ]

  return (
    <>
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-xl">
            <Coins className="mr-2 h-6 w-6 text-primary" />
            Quick Actions
            <Badge variant="secondary" className="ml-2">
              <Zap className="mr-1 h-3 w-3" />
              Earn XP
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {actions.map((action) => {
              const Icon = action.icon
              return (
                <Card
                  key={action.id}
                  className="cursor-pointer border transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className={`rounded-lg p-2 ${action.bgColor}`}>
                        <Icon className={`h-5 w-5 ${action.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {action.reward}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold">{action.title}</h3>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                    <div className="mt-3">
                      <Button size="sm" className="w-full" onClick={() => setActiveModal(action.id)}>
                        Start {action.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-lg font-bold text-green-600">$2,500</div>
              <div className="text-xs text-muted-foreground">Total Saved</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-lg font-bold text-blue-600">3</div>
              <div className="text-xs text-muted-foreground">Active Goals</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-3">
              <div className="text-lg font-bold text-purple-600">7</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      {activeModal === "add-income" && <AddIncomeModal onClose={() => setActiveModal(null)} />}
      {activeModal === "track-expense" && <AddExpenseModal onClose={() => setActiveModal(null)} />}
      {activeModal === "set-goal" && <SetGoalModal onClose={() => setActiveModal(null)} />}
      {activeModal === "view-progress" && <ViewProgressModal onClose={() => setActiveModal(null)} />}
    </>
  )
}
