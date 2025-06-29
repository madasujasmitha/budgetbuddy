"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Zap, Coins, Target, TrendingUp, Calendar } from "lucide-react"
import { StatsModal } from "./stats-modal"

interface UserData {
  id: string
  username: string
  email: string
  level: number
  xp: number
  coins: number
  totalSaved: number
  goalsCompleted: number
  currentStreak: number
  achievements: string[]
}

export function PlayerStats() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [selectedStat, setSelectedStat] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("budgetbuddy_user")
        if (storedUser) {
          const user = JSON.parse(storedUser)
          setUserData(user)
        }
      } catch (error) {
        console.error("Error loading user data:", error)
      }
    }
  }, [])

  if (!userData) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Calculate XP needed for next level
  const xpForNextLevel = (userData.level + 1) * 1000
  const xpProgress = (userData.xp % 1000) / 10 // Convert to percentage

  const stats = [
    {
      id: "level",
      title: "Level",
      value: userData.level,
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: `${userData.xp} XP total`,
      progress: xpProgress,
      progressLabel: `${userData.xp % 1000}/1000 XP to next level`,
    },
    {
      id: "coins",
      title: "Coins",
      value: userData.coins,
      icon: Coins,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "Earned from completing tasks",
    },
    {
      id: "saved",
      title: "Total Saved",
      value: `$${userData.totalSaved}`,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Your savings journey",
    },
    {
      id: "streak",
      title: "Daily Streak",
      value: userData.currentStreak,
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Days in a row",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.id}
              className="cursor-pointer hover:shadow-md transition-shadow border-2 border-transparent hover:border-primary/20"
              onClick={() => setSelectedStat(stat.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  {stat.id === "level" && (
                    <Badge variant="secondary" className="text-xs">
                      +{userData.xp % 100} XP
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                  {stat.progress !== undefined && (
                    <div className="space-y-1">
                      <Progress value={stat.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{stat.progressLabel}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions Row */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-3 flex flex-col items-center space-y-1 bg-transparent"
            >
              <Target className="h-4 w-4" />
              <span className="text-xs">Set Goal</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-3 flex flex-col items-center space-y-1 bg-transparent"
            >
              <Coins className="h-4 w-4" />
              <span className="text-xs">Add Money</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-3 flex flex-col items-center space-y-1 bg-transparent"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs">Track Expense</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-auto py-3 flex flex-col items-center space-y-1 bg-transparent"
            >
              <Trophy className="h-4 w-4" />
              <span className="text-xs">View Achievements</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Modal */}
      <StatsModal
        isOpen={!!selectedStat}
        onClose={() => setSelectedStat(null)}
        statType={selectedStat}
        userData={userData}
      />
    </>
  )
}
