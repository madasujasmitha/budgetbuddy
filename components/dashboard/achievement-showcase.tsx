"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Coins, Calendar, ChevronRight, Lock } from "lucide-react"

interface UserData {
  achievements: string[]
}

export function AchievementShowcase() {
  const [userData, setUserData] = useState<UserData | null>(null)

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

  const achievements = [
    {
      id: "first_save",
      title: "First Save",
      description: "Made your first savings entry",
      icon: Coins,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      unlocked: true,
    },
    {
      id: "goal_crusher",
      title: "Goal Crusher",
      description: "Completed your first savings goal",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      unlocked: true,
    },
    {
      id: "money_master",
      title: "Money Master",
      description: "Tracked expenses for 7 days straight",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      unlocked: true,
    },
    {
      id: "streak_warrior",
      title: "Streak Warrior",
      description: "Maintained a 30-day login streak",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      unlocked: false,
      progress: 23,
      maxProgress: 30,
    },
    {
      id: "savings_champion",
      title: "Savings Champion",
      description: "Saved $1000 total",
      icon: Trophy,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      unlocked: false,
      progress: 2500,
      maxProgress: 1000,
    },
  ]

  const unlockedAchievements = achievements.filter((a) => userData?.achievements?.includes(a.id) || a.unlocked)
  const lockedAchievements = achievements.filter((a) => !userData?.achievements?.includes(a.id) && !a.unlocked)

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-primary" />
            Achievements
            <Badge variant="secondary" className="ml-2">
              {unlockedAchievements.length}/{achievements.length}
            </Badge>
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Unlocked Achievements */}
          {unlockedAchievements.slice(0, 3).map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.id}
                className={`p-3 rounded-lg border-2 ${achievement.borderColor} ${achievement.bgColor}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-white`}>
                    <Icon className={`h-4 w-4 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <Badge variant="default" className="text-xs">
                        Unlocked
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Locked Achievements with Progress */}
          {lockedAchievements.slice(0, 2).map((achievement) => {
            const Icon = achievement.icon
            const progressPercentage =
              achievement.progress && achievement.maxProgress
                ? Math.min((achievement.progress / achievement.maxProgress) * 100, 100)
                : 0

            return (
              <div key={achievement.id} className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gray-200">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-gray-600">{achievement.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        Locked
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    {achievement.progress !== undefined && achievement.maxProgress && (
                      <div className="space-y-1">
                        <Progress value={progressPercentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {achievement.progress}/{achievement.maxProgress}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <div className="text-lg font-bold text-primary">{unlockedAchievements.length}</div>
              <div className="text-xs text-muted-foreground">Unlocked</div>
            </div>
            <div className="p-2 bg-secondary/10 rounded-lg">
              <div className="text-lg font-bold text-secondary">{lockedAchievements.length}</div>
              <div className="text-xs text-muted-foreground">To Unlock</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
