"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Plus, Minus, Target, Trophy, Coins, ChevronRight } from 'lucide-react'
import { ViewAllTransactionsModal } from "@/components/modals/view-all-transactions-modal"

export function RecentAdventures() {
  const [showAllTransactions, setShowAllTransactions] = useState(false)

  const adventures = [
    {
      id: 1,
      type: "income",
      title: "Allowance Received",
      description: "Weekly allowance from parents",
      amount: "+$20",
      xp: "+25 XP",
      time: "2 hours ago",
      icon: Plus,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      type: "expense",
      title: "Lunch Purchase",
      description: "School cafeteria meal",
      amount: "-$8",
      xp: "+15 XP",
      time: "4 hours ago",
      icon: Minus,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      type: "goal",
      title: "Goal Progress",
      description: "Saved for new headphones",
      amount: "$45/$100",
      xp: "+30 XP",
      time: "1 day ago",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      type: "achievement",
      title: "Achievement Unlocked",
      description: "First Week Saver badge earned",
      amount: "Badge",
      xp: "+100 XP",
      time: "2 days ago",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <>
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <Clock className="mr-2 h-6 w-6 text-primary" />
              Recent Activity
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAllTransactions(true)}
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {adventures.map((adventure) => {
              const Icon = adventure.icon
              return (
                <div
                  key={adventure.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${adventure.bgColor}`}>
                    <Icon className={`h-4 w-4 ${adventure.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm truncate">{adventure.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {adventure.xp}
                        </Badge>
                        <span className={`text-sm font-semibold ${adventure.color}`}>{adventure.amount}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{adventure.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{adventure.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {showAllTransactions && (
        <ViewAllTransactionsModal onClose={() => setShowAllTransactions(false)} />
      )}
    </>
  )
}
