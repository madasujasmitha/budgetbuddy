"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Sparkles, Briefcase, Clock } from "lucide-react"

export function QuestProgress() {
  // Sample goal data
  const quest = {
    name: "Epic Nike Air Jordans",
    target: 150,
    current: 85,
    deadline: "July 15, 2024",
    image: "/placeholder.svg?height=80&width=80",
    pathways: [
      { job: "Lawn Mowing", count: 3, earnings: "$25/job", timeNeeded: "3-6 hours" },
      { job: "Dog Walking", count: 5, earnings: "$15/hr", timeNeeded: "5-7 hours" },
      { job: "Babysitting", count: 2, earnings: "$35/job", timeNeeded: "4-6 hours" },
    ],
  }

  // Calculate percentage
  const percentage = Math.round((quest.current / quest.target) * 100)

  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-primary" />
          <CardTitle className="text-base">Epic Quest</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 border-primary/20">
            <img src={quest.image || "/placeholder.svg"} alt={quest.name} className="h-full w-full object-cover" />
            {percentage >= 50 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse-slow" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold">{quest.name}</h3>
            <p className="text-xs text-muted-foreground">Complete by: {quest.deadline}</p>

            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">${quest.current}</span>
                <span className="text-muted-foreground">of ${quest.target}</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${percentage}%` }}
                />
                {percentage >= 25 && percentage < 50 && (
                  <div className="absolute left-1/4 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary" />
                )}
                {percentage >= 50 && percentage < 75 && (
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary" />
                )}
                {percentage >= 75 && (
                  <div className="absolute left-3/4 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary" />
                )}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{percentage}% completed</span>
                <span>${quest.target - quest.current} to go</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-secondary/10 p-3">
          <h3 className="text-sm font-bold flex items-center">
            <Briefcase className="h-4 w-4 mr-1 text-secondary" />
            Earning Pathways
          </h3>
          <p className="text-xs text-muted-foreground mt-1">Here are the fastest ways to complete your quest:</p>

          <div className="mt-2 space-y-2">
            {quest.pathways.map((pathway, index) => (
              <div key={index} className="rounded-lg bg-white/50 p-2 flex justify-between items-center">
                <div>
                  <span className="text-xs font-medium">{pathway.job}</span>
                  <div className="flex items-center text-xs text-muted-foreground mt-0.5">
                    <span className="mr-2">
                      {pathway.count}x {pathway.earnings}
                    </span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{pathway.timeNeeded}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  Find Jobs
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Boost Quest
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Find Side Quests
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
