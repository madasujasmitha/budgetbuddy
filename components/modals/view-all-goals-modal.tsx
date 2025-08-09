"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Target, Plus } from 'lucide-react'

interface ViewAllGoalsModalProps {
  onClose: () => void
}

export function ViewAllGoalsModal({ onClose }: ViewAllGoalsModalProps) {
  const allGoals = [
    {
      id: 1,
      title: "New Gaming Headset",
      description: "Save for wireless gaming headphones",
      current: 145,
      target: 200,
      category: "Electronics",
      daysLeft: 12,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Summer Camp",
      description: "Art camp registration fee",
      current: 320,
      target: 450,
      category: "Education",
      daysLeft: 45,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Emergency Fund",
      description: "Build a safety net",
      current: 85,
      target: 500,
      category: "Savings",
      daysLeft: 180,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "New Skateboard",
      description: "Professional skateboard setup",
      current: 75,
      target: 150,
      category: "Sports",
      daysLeft: 30,
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Concert Tickets",
      description: "Favorite band coming to town",
      current: 40,
      target: 80,
      category: "Entertainment",
      daysLeft: 20,
      color: "bg-pink-500",
    },
    {
      id: 6,
      title: "College Fund",
      description: "Start saving for college",
      current: 250,
      target: 1000,
      category: "Education",
      daysLeft: 365,
      color: "bg-indigo-500",
    },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-primary" />
            All Your Goals
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {allGoals.map((goal) => {
              const progress = (goal.current / goal.target) * 100
              const isCompleted = progress >= 100

              return (
                <div key={goal.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{goal.title}</h4>
                      <p className="text-xs text-muted-foreground">{goal.description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {goal.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">${goal.current} / ${goal.target}</span>
                      <span className="text-muted-foreground">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{goal.daysLeft} days left</span>
                      <span>${goal.target - goal.current} to go</span>
                    </div>
                  </div>

                  {isCompleted && (
                    <div className="mt-2 text-center">
                      <Badge className="bg-green-100 text-green-800">🎉 Goal Achieved!</Badge>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <div className="flex items-center justify-between pt-4">
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New Goal
          </Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
