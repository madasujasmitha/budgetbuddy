"use client"

import { useState } from "react"
import { Award, ChevronRight, Sparkles, Target, DollarSign, Briefcase, Rocket, Heart, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BackButton } from "@/components/ui/back-button"

// Sample achievements data
const achievements = [
  {
    id: 1,
    name: "Savings Starter",
    description: "Save your first $50",
    icon: "🏆",
    progress: 100,
    completed: true,
    completedDate: "May 10, 2024",
    rarity: "Common",
    xp: 50,
    category: "saving",
  },
  {
    id: 2,
    name: "Budget Master",
    description: "Track expenses for 7 days straight",
    icon: "📊",
    progress: 100,
    completed: true,
    completedDate: "May 12, 2024",
    rarity: "Uncommon",
    xp: 75,
    category: "tracking",
  },
  {
    id: 3,
    name: "First Income",
    description: "Record your first income",
    icon: "💰",
    progress: 100,
    completed: true,
    completedDate: "May 8, 2024",
    rarity: "Common",
    xp: 50,
    category: "earning",
  },
  {
    id: 4,
    name: "Goal Getter",
    description: "Complete your first savings goal",
    icon: "🎯",
    progress: 65,
    completed: false,
    rarity: "Rare",
    xp: 100,
    category: "goals",
  },
  {
    id: 5,
    name: "Money Mentor",
    description: "Help 3 friends with financial advice",
    icon: "🧠",
    progress: 33,
    completed: false,
    rarity: "Epic",
    xp: 150,
    category: "social",
  },
  {
    id: 6,
    name: "Job Hunter",
    description: "Apply for your first job",
    icon: "💼",
    progress: 100,
    completed: true,
    completedDate: "May 14, 2024",
    rarity: "Common",
    xp: 50,
    category: "earning",
  },
  {
    id: 7,
    name: "Emotion Tracker",
    description: "Record your money feelings for 5 days",
    icon: "❤️",
    progress: 80,
    completed: false,
    rarity: "Uncommon",
    xp: 75,
    category: "tracking",
  },
  {
    id: 8,
    name: "Future Planner",
    description: "Create a long-term savings plan",
    icon: "🚀",
    progress: 0,
    completed: false,
    rarity: "Rare",
    xp: 100,
    category: "goals",
  },
  {
    id: 9,
    name: "Local Explorer",
    description: "Discover 5 teen-friendly businesses in your area",
    icon: "🗺️",
    progress: 40,
    completed: false,
    rarity: "Uncommon",
    xp: 75,
    category: "social",
  },
  {
    id: 10,
    name: "Skill Builder",
    description: "Reach level 2 in any skill",
    icon: "⚒️",
    progress: 100,
    completed: true,
    completedDate: "May 15, 2024",
    rarity: "Uncommon",
    xp: 75,
    category: "earning",
  },
  {
    id: 11,
    name: "Savings Streak",
    description: "Save money for 4 weeks in a row",
    icon: "🔥",
    progress: 50,
    completed: false,
    rarity: "Rare",
    xp: 100,
    category: "saving",
  },
  {
    id: 12,
    name: "Financial Wizard",
    description: "Complete all common achievements",
    icon: "🧙",
    progress: 75,
    completed: false,
    rarity: "Legendary",
    xp: 200,
    category: "goals",
  },
]

const rarityColors = {
  Common: "border-blue-200 bg-blue-50 text-blue-700",
  Uncommon: "border-purple-200 bg-purple-50 text-purple-700",
  Rare: "border-orange-200 bg-orange-50 text-orange-700",
  Epic: "border-pink-200 bg-pink-50 text-pink-700",
  Legendary: "border-yellow-200 bg-yellow-50 text-yellow-700",
}

const categoryIcons = {
  saving: DollarSign,
  tracking: Target,
  earning: Briefcase,
  goals: Rocket,
  social: Heart,
}

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof achievements)[0] | null>(null)
  const [isAchievementDetailOpen, setIsAchievementDetailOpen] = useState(false)

  // Filter achievements based on selected tab
  const filteredAchievements = achievements.filter((achievement) => {
    if (activeTab === "all") return true
    if (activeTab === "completed" && achievement.completed) return true
    if (activeTab === "in-progress" && !achievement.completed && achievement.progress > 0) return true
    if (activeTab === "locked" && achievement.progress === 0) return true
    if (activeTab === achievement.category) return true
    return false
  })

  const handleAchievementClick = (achievement: (typeof achievements)[0]) => {
    setSelectedAchievement(achievement)
    setIsAchievementDetailOpen(true)
  }

  // Calculate stats
  const totalAchievements = achievements.length
  const completedAchievements = achievements.filter((a) => a.completed).length
  const totalXP = achievements.reduce((sum, a) => sum + (a.completed ? a.xp : 0), 0)

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="mt-2 text-xl font-bold">
                    {completedAchievements}/{totalAchievements}
                  </h2>
                  <p className="text-sm text-muted-foreground">Achievements Completed</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span className="font-medium">
                      {Math.round((completedAchievements / totalAchievements) * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={(completedAchievements / totalAchievements) * 100}
                    className="h-2 mt-1 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
                  />
                </div>

                <div className="rounded-lg bg-primary/10 p-3">
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-bold">{totalXP} XP</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Earned from achievements</p>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Sparkles className="mr-2 h-4 w-4" />
                    View Rewards
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("all")}
                >
                  <Award className="mr-2 h-4 w-4" />
                  All Achievements
                </Button>
                <Button
                  variant={activeTab === "saving" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("saving")}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Saving
                </Button>
                <Button
                  variant={activeTab === "tracking" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("tracking")}
                >
                  <Target className="mr-2 h-4 w-4" />
                  Tracking
                </Button>
                <Button
                  variant={activeTab === "earning" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("earning")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Earning
                </Button>
                <Button
                  variant={activeTab === "goals" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("goals")}
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Goals
                </Button>
                <Button
                  variant={activeTab === "social" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("social")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Social
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <Tabs
            value={
              activeTab === "all" ||
              activeTab === "saving" ||
              activeTab === "tracking" ||
              activeTab === "earning" ||
              activeTab === "goals" ||
              activeTab === "social"
                ? "all"
                : activeTab
            }
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`relative overflow-hidden rounded-lg border p-4 cursor-pointer hover:shadow-md transition-shadow ${
                  achievement.completed ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => handleAchievementClick(achievement)}
              >
                {achievement.completed && (
                  <div className="absolute -right-6 -top-6 h-12 w-12 rotate-45 bg-yellow-400" />
                )}
                {achievement.progress === 0 && (
                  <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-gray-500" />
                  </div>
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl">{achievement.icon}</div>
                  <h3 className="font-bold">{achievement.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{achievement.description}</p>

                  <div className="mt-2 w-full">
                    <div className="flex justify-between text-xs">
                      <Badge
                        variant="outline"
                        className={rarityColors[achievement.rarity as keyof typeof rarityColors]}
                      >
                        {achievement.rarity}
                      </Badge>
                      <span className="text-muted-foreground">{achievement.progress}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full ${achievement.completed ? "bg-yellow-400" : "bg-primary"}`}
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>

                  {achievement.completed ? (
                    <div className="mt-2 flex items-center text-xs text-yellow-600">
                      <Sparkles className="mr-1 h-3 w-3" />
                      <span>+{achievement.xp} XP</span>
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center text-xs text-primary">
                      <Award className="mr-1 h-3 w-3" />
                      <span>Reward: {achievement.xp} XP</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Detail Dialog */}
      <Dialog open={isAchievementDetailOpen} onOpenChange={setIsAchievementDetailOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <span className="mr-2 text-2xl">{selectedAchievement?.icon}</span>
              {selectedAchievement?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedAchievement && (
            <div className="space-y-4 mt-2">
              <Badge
                variant="outline"
                className={rarityColors[selectedAchievement.rarity as keyof typeof rarityColors]}
              >
                {selectedAchievement.rarity}
              </Badge>

              <p>{selectedAchievement.description}</p>

              <div>
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{selectedAchievement.progress}%</span>
                </div>
                <Progress
                  value={selectedAchievement.progress}
                  className={`h-2 mt-1 ${
                    selectedAchievement.completed
                      ? "bg-yellow-100 [&>div]:bg-yellow-400"
                      : "bg-primary/10 [&>div]:bg-primary"
                  }`}
                />
              </div>

              <div className="rounded-lg bg-primary/10 p-3">
                <h3 className="font-medium flex items-center">
                  <Sparkles className="h-4 w-4 mr-1 text-primary" />
                  Reward
                </h3>
                <div className="mt-2 flex justify-between items-center">
                  <span>XP Points:</span>
                  <span className="font-bold">{selectedAchievement.xp} XP</span>
                </div>
                {selectedAchievement.category === "goals" && (
                  <div className="mt-1 flex justify-between items-center">
                    <span>Bonus:</span>
                    <span className="font-bold">Special Avatar Frame</span>
                  </div>
                )}
              </div>

              {selectedAchievement.completed ? (
                <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                  <h3 className="font-medium flex items-center text-green-700">
                    <Award className="h-4 w-4 mr-1" />
                    Completed!
                  </h3>
                  <p className="text-sm mt-1">You completed this achievement on {selectedAchievement.completedDate}.</p>
                </div>
              ) : (
                <div className="rounded-lg bg-muted p-3">
                  <h3 className="font-medium flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    How to Complete
                  </h3>
                  <p className="text-sm mt-1">
                    {selectedAchievement.category === "saving"
                      ? "Add money to your savings regularly to complete this achievement."
                      : selectedAchievement.category === "tracking"
                        ? "Keep tracking your expenses consistently to make progress."
                        : selectedAchievement.category === "earning"
                          ? "Find and record income sources to advance."
                          : selectedAchievement.category === "goals"
                            ? "Set and achieve your financial goals to complete this."
                            : "Connect with friends and share financial tips to progress."}
                  </p>
                </div>
              )}

              <div className="flex space-x-3 pt-2">
                {selectedAchievement.completed ? (
                  <Button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600">
                    <Award className="mr-2 h-4 w-4" />
                    Share Achievement
                  </Button>
                ) : (
                  <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Target className="mr-2 h-4 w-4" />
                    Focus on This
                  </Button>
                )}
                <Button variant="outline" className="flex-1">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Related Achievements
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
