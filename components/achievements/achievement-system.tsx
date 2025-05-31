"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Trophy,
  Star,
  Target,
  DollarSign,
  Brain,
  Users,
  Zap,
  Award,
  BookOpen,
  Calculator,
  TrendingUp,
  Shield,
} from "lucide-react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: any
  category: "financial" | "educational" | "social" | "milestone"
  rarity: "common" | "rare" | "epic" | "legendary"
  xpReward: number
  progress: number
  maxProgress: number
  unlocked: boolean
  unlockedDate?: string
  requirements: string[]
}

const achievements: Achievement[] = [
  {
    id: "first_budget",
    name: "Budget Beginner",
    description: "Create your first budget",
    icon: Target,
    category: "financial",
    rarity: "common",
    xpReward: 50,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    unlockedDate: "2024-01-15",
    requirements: ["Create a budget with at least 3 categories"],
  },
  {
    id: "quiz_master",
    name: "Quiz Master",
    description: "Score 80% or higher on a financial literacy quiz",
    icon: Brain,
    category: "educational",
    rarity: "rare",
    xpReward: 150,
    progress: 4,
    maxProgress: 5,
    unlocked: false,
    requirements: ["Complete 5 quizzes with 80%+ score"],
  },
  {
    id: "savings_streak",
    name: "Savings Streak",
    description: "Save money for 30 consecutive days",
    icon: DollarSign,
    category: "financial",
    rarity: "epic",
    xpReward: 300,
    progress: 15,
    maxProgress: 30,
    unlocked: false,
    requirements: ["Add to savings every day for 30 days"],
  },
  {
    id: "calculator_pro",
    name: "Calculator Pro",
    description: "Use all financial calculators",
    icon: Calculator,
    category: "educational",
    rarity: "rare",
    xpReward: 200,
    progress: 2,
    maxProgress: 4,
    unlocked: false,
    requirements: ["Use compound interest, loan, savings, and budget calculators"],
  },
  {
    id: "social_learner",
    name: "Social Learner",
    description: "Complete a challenge with friends",
    icon: Users,
    category: "social",
    rarity: "rare",
    xpReward: 175,
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    requirements: ["Join and complete a group financial challenge"],
  },
  {
    id: "emergency_fund",
    name: "Emergency Ready",
    description: "Build an emergency fund of $500",
    icon: Shield,
    category: "milestone",
    rarity: "epic",
    xpReward: 400,
    progress: 250,
    maxProgress: 500,
    unlocked: false,
    requirements: ["Accumulate $500 in emergency savings"],
  },
  {
    id: "knowledge_seeker",
    name: "Knowledge Seeker",
    description: "Read 10 financial education articles",
    icon: BookOpen,
    category: "educational",
    rarity: "common",
    xpReward: 100,
    progress: 7,
    maxProgress: 10,
    unlocked: false,
    requirements: ["Complete 10 educational articles or tutorials"],
  },
  {
    id: "investment_starter",
    name: "Investment Starter",
    description: "Make your first investment",
    icon: TrendingUp,
    category: "milestone",
    rarity: "legendary",
    xpReward: 500,
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    requirements: ["Make your first investment (simulated)"],
  },
]

const rarityColors = {
  common: "bg-gray-100 text-gray-700 border-gray-300",
  rare: "bg-blue-100 text-blue-700 border-blue-300",
  epic: "bg-purple-100 text-purple-700 border-purple-300",
  legendary: "bg-yellow-100 text-yellow-700 border-yellow-300",
}

const categoryIcons = {
  financial: DollarSign,
  educational: Brain,
  social: Users,
  milestone: Trophy,
}

export function AchievementSystem() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [newUnlocks, setNewUnlocks] = useState<Achievement[]>([])

  const filteredAchievements = achievements.filter((achievement) => {
    if (filter === "all") return true
    if (filter === "unlocked") return achievement.unlocked
    if (filter === "locked") return !achievement.unlocked
    return achievement.category === filter
  })

  const totalXP = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.xpReward, 0)
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  // Simulate achievement unlock
  const checkForNewAchievements = () => {
    // This would normally be called when user actions trigger achievement progress
    const newlyUnlocked = achievements.filter((a) => !a.unlocked && a.progress >= a.maxProgress)

    if (newlyUnlocked.length > 0) {
      setNewUnlocks(newlyUnlocked)
      // Update achievements as unlocked
      newlyUnlocked.forEach((achievement) => {
        achievement.unlocked = true
        achievement.unlockedDate = new Date().toISOString().split("T")[0]
      })
    }
  }

  useEffect(() => {
    checkForNewAchievements()
  }, [])

  return (
    <div className="space-y-6">
      {/* Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{unlockedCount}</p>
                <p className="text-sm text-muted-foreground">Achievements Unlocked</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{totalXP}</p>
                <p className="text-sm text-muted-foreground">Total XP Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">{Math.round((unlockedCount / achievements.length) * 100)}%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Achievement Gallery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {["all", "unlocked", "locked", "financial", "educational", "social", "milestone"].map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterOption)}
                className="capitalize"
              >
                {filterOption}
              </Button>
            ))}
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map((achievement) => {
              const IconComponent = achievement.icon
              const CategoryIcon = categoryIcons[achievement.category]
              const progressPercentage = (achievement.progress / achievement.maxProgress) * 100

              return (
                <Card
                  key={achievement.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    achievement.unlocked ? "border-green-200 bg-green-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${achievement.unlocked ? "bg-green-100" : "bg-gray-100"}`}>
                        <IconComponent
                          className={`h-6 w-6 ${achievement.unlocked ? "text-green-600" : "text-gray-500"}`}
                        />
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className={`text-xs ${rarityColors[achievement.rarity]}`}>{achievement.rarity}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {achievement.category}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-1">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>
                          {achievement.progress}/{achievement.maxProgress}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 mr-1" />+{achievement.xpReward} XP
                      </div>
                      {achievement.unlocked && <Badge className="bg-green-100 text-green-700 text-xs">Unlocked!</Badge>}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Detail Modal */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedAchievement && (
                <>
                  <selectedAchievement.icon className="mr-2 h-6 w-6" />
                  {selectedAchievement.name}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedAchievement && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className={`${rarityColors[selectedAchievement.rarity]}`}>{selectedAchievement.rarity}</Badge>
                <Badge variant="outline" className="capitalize">
                  {selectedAchievement.category}
                </Badge>
              </div>

              <p className="text-muted-foreground">{selectedAchievement.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>
                    {selectedAchievement.progress}/{selectedAchievement.maxProgress}
                  </span>
                </div>
                <Progress value={(selectedAchievement.progress / selectedAchievement.maxProgress) * 100} />
              </div>

              <div className="bg-muted rounded-lg p-3">
                <h4 className="font-medium mb-2">Requirements:</h4>
                <ul className="text-sm space-y-1">
                  {selectedAchievement.requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="font-medium">XP Reward</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-primary mr-1" />
                  <span className="font-bold">+{selectedAchievement.xpReward} XP</span>
                </div>
              </div>

              {selectedAchievement.unlocked && selectedAchievement.unlockedDate && (
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium">🎉 Unlocked on {selectedAchievement.unlockedDate}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* New Achievement Notification */}
      {newUnlocks.length > 0 && (
        <Dialog open={true} onOpenChange={() => setNewUnlocks([])}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">🎉 Achievement Unlocked!</DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              {newUnlocks.map((achievement) => (
                <div key={achievement.id} className="p-4 bg-green-50 rounded-lg">
                  <achievement.icon className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <h3 className="font-bold text-green-800">{achievement.name}</h3>
                  <p className="text-sm text-green-700">{achievement.description}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">+{achievement.xpReward} XP</span>
                  </div>
                </div>
              ))}
              <Button onClick={() => setNewUnlocks([])} className="w-full">
                Awesome!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
