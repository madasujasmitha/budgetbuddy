"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, DollarSign, Calendar } from 'lucide-react'

interface ViewProgressModalProps {
  onClose: () => void
}

export function ViewProgressModal({ onClose }: ViewProgressModalProps) {
  const stats = [
    {
      title: "Total Saved",
      value: "$2,500",
      change: "+$150 this month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Goals",
      value: "3",
      change: "2 on track",
      icon: Target,
      color: "text-blue-600",
    },
    {
      title: "Savings Rate",
      value: "65%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Days Streak",
      value: "7",
      change: "Personal best!",
      icon: Calendar,
      color: "text-orange-600",
    },
  ]

  const goals = [
    { name: "Gaming Headset", progress: 72, current: 145, target: 200 },
    { name: "Summer Camp", progress: 71, current: 320, target: 450 },
    { name: "Emergency Fund", progress: 17, current: 85, target: 500 },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
            Your Financial Progress
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.title}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.change}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Goals Progress */}
          <div>
            <h3 className="font-semibold mb-4">Goal Progress</h3>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ${goal.current} / ${goal.target}
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-right text-xs text-muted-foreground">
                    {goal.progress}% complete
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
