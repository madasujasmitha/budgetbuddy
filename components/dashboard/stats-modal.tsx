"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Coins, TrendingUp, Calendar, Star, Target } from "lucide-react"

interface UserData {
  id: string
  username: string
  level: number
  xp: number
  coins: number
  totalSaved: number
  goalsCompleted: number
  currentStreak: number
  achievements: string[]
}

interface StatsModalProps {
  isOpen: boolean
  onClose: () => void
  statType: string | null
  userData: UserData
}

export function StatsModal({ isOpen, onClose, statType, userData }: StatsModalProps) {
  if (!statType || !userData) return null

  const getStatDetails = () => {
    switch (statType) {
      case "level":
        const xpForNextLevel = (userData.level + 1) * 1000
        const currentLevelXP = userData.xp % 1000
        const xpProgress = (currentLevelXP / 1000) * 100

        return {
          title: "Level Progress",
          icon: Trophy,
          color: "text-yellow-600",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">Level {userData.level}</div>
                <p className="text-muted-foreground">Total XP: {userData.xp}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level {userData.level + 1}</span>
                  <span>{currentLevelXP}/1000 XP</span>
                </div>
                <Progress value={xpProgress} className="h-3" />
                <p className="text-sm text-muted-foreground text-center">
                  {1000 - currentLevelXP} XP needed for next level
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{userData.achievements.length}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">{userData.goalsCompleted}</div>
                  <div className="text-sm text-muted-foreground">Goals Completed</div>
                </div>
              </div>
            </div>
          ),
        }

      case "coins":
        return {
          title: "Coin Balance",
          icon: Coins,
          color: "text-amber-600",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{userData.coins}</div>
                <p className="text-muted-foreground">Total Coins Earned</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">How to Earn More Coins:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Complete daily quests</span>
                    <Badge variant="secondary">+10-50 coins</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Reach savings goals</span>
                    <Badge variant="secondary">+100 coins</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Track expenses daily</span>
                    <Badge variant="secondary">+25 coins</Badge>
                  </div>
                </div>
              </div>
            </div>
          ),
        }

      case "saved":
        return {
          title: "Savings Progress",
          icon: TrendingUp,
          color: "text-green-600",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">${userData.totalSaved}</div>
                <p className="text-muted-foreground">Total Amount Saved</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Monthly Average</span>
                    <span className="text-green-600 font-bold">${Math.round(userData.totalSaved / 6)}</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Savings Rate</span>
                    <span className="text-blue-600 font-bold">23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
              </div>

              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Star className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-green-700">Great job! You're building healthy saving habits.</p>
              </div>
            </div>
          ),
        }

      case "streak":
        return {
          title: "Daily Streak",
          icon: Calendar,
          color: "text-orange-600",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{userData.currentStreak}</div>
                <p className="text-muted-foreground">Days in a Row</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Streak Milestones:</h4>
                <div className="space-y-2">
                  <div
                    className={`flex items-center justify-between p-2 rounded ${userData.currentStreak >= 7 ? "bg-green-50 text-green-700" : "bg-gray-50"}`}
                  >
                    <span className="text-sm">7 Day Streak</span>
                    <Badge variant={userData.currentStreak >= 7 ? "default" : "secondary"}>
                      {userData.currentStreak >= 7 ? "✓ Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <div
                    className={`flex items-center justify-between p-2 rounded ${userData.currentStreak >= 30 ? "bg-green-50 text-green-700" : "bg-gray-50"}`}
                  >
                    <span className="text-sm">30 Day Streak</span>
                    <Badge variant={userData.currentStreak >= 30 ? "default" : "secondary"}>
                      {userData.currentStreak >= 30 ? "✓ Completed" : `${30 - userData.currentStreak} days to go`}
                    </Badge>
                  </div>
                  <div
                    className={`flex items-center justify-between p-2 rounded ${userData.currentStreak >= 100 ? "bg-green-50 text-green-700" : "bg-gray-50"}`}
                  >
                    <span className="text-sm">100 Day Streak</span>
                    <Badge variant={userData.currentStreak >= 100 ? "default" : "secondary"}>
                      {userData.currentStreak >= 100 ? "✓ Completed" : `${100 - userData.currentStreak} days to go`}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-orange-700">
                  Keep logging in daily to maintain your streak and earn bonus XP!
                </p>
              </div>
            </div>
          ),
        }

      default:
        return null
    }
  }

  const statDetails = getStatDetails()
  if (!statDetails) return null

  const Icon = statDetails.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon className={`mr-2 h-5 w-5 ${statDetails.color}`} />
            {statDetails.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">{statDetails.content}</div>
      </DialogContent>
    </Dialog>
  )
}
