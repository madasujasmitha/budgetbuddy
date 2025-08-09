"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle, Circle, Zap } from 'lucide-react'

interface ViewAllQuestsModalProps {
  onClose: () => void
}

export function ViewAllQuestsModal({ onClose }: ViewAllQuestsModalProps) {
  const [quests, setQuests] = useState([
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
    {
      id: 5,
      title: "Save $5 Today",
      description: "Put aside $5 towards your goals",
      xp: 35,
      coins: 15,
      completed: false,
      difficulty: "Medium",
    },
    {
      id: 6,
      title: "Compare Prices",
      description: "Research prices before making a purchase",
      xp: 20,
      coins: 8,
      completed: false,
      difficulty: "Easy",
    },
    {
      id: 7,
      title: "Weekly Budget Review",
      description: "Review your spending from this week",
      xp: 50,
      coins: 25,
      completed: false,
      difficulty: "Hard",
    },
  ])

  const completeQuest = (questId: number) => {
    setQuests(prev => prev.map(quest => 
      quest.id === questId ? { ...quest, completed: true } : quest
    ))
  }

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
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>All Daily Quests</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className={`p-3 rounded-lg border transition-colors ${
                  quest.completed
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-gray-200 hover:border-primary/30"
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
                      <Badge className={getDifficultyColor(quest.difficulty)}>{quest.difficulty}</Badge>
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
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-6 text-xs px-2"
                          onClick={() => completeQuest(quest.id)}
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
