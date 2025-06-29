"use client"

import { useState } from "react"
import { Award, Trophy, Star, Target, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    id: 1,
    name: "First Quest",
    description: "Created your first savings goal",
    icon: Target,
    earned: true,
    rarity: "common",
    xp: 50,
  },
  {
    id: 2,
    name: "Money Tracker",
    description: "Logged 10 transactions",
    icon: Zap,
    earned: true,
    rarity: "common",
    xp: 75,
  },
  {
    id: 3,
    name: "Goal Crusher",
    description: "Completed your first savings goal",
    icon: Trophy,
    earned: false,
    rarity: "rare",
    xp: 200,
    progress: 65,
  },
  {
    id: 4,
    name: "Skill Master",
    description: "Reached level 5 in any skill",
    icon: Star,
    earned: false,
    rarity: "epic",
    xp: 500,
    progress: 20,
  },
]

export function AchievementShowcase() {
  const [selectedAchievement, setSelectedAchievement] = useState(achievements[0])

  const earnedCount = achievements.filter((a) => a.earned).length
  const totalXP = achievements.filter((a) => a.earned).reduce((sum, a) => sum + a.xp, 0)

  return (
    <Card className="border-2 border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <CardTitle className="text-base flex items-center justify-between">
          <div className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-primary" />
            Achievements
          </div>
          <Badge className="bg-primary/20 text-primary">
            {earnedCount}/{achievements.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {/* Achievement Gallery Image */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
          <img
            src="/placeholder.svg?height=120&width=180"
            alt="Achievement gallery with trophies and badges"
            className="w-full rounded-lg"
          />
        </div>

        <div className="space-y-3">
          {achievements.slice(0, 3).map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={achievement.id}
                className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  achievement.earned
                    ? "bg-primary/10 border border-primary/20"
                    : "bg-muted/50 border border-muted opacity-60"
                }`}
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    achievement.earned
                      ? achievement.rarity === "epic"
                        ? "bg-purple-500"
                        : achievement.rarity === "rare"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      : "bg-muted-foreground"
                  }`}
                >
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{achievement.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{achievement.description}</p>
                </div>
                {achievement.earned && <Badge className="bg-secondary text-xs">+{achievement.xp} XP</Badge>}
              </div>
            )
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-muted">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Total Achievement XP</span>
            <span className="font-medium">{totalXP} XP</span>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View All Achievements
            <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
