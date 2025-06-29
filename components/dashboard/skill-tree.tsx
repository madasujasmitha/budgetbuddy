"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Star, Lock, ChevronRight } from "lucide-react"

export function SkillTree() {
  const skills = [
    {
      id: "budgeting",
      name: "Budgeting",
      level: 3,
      maxLevel: 5,
      xp: 750,
      maxXp: 1000,
      unlocked: true,
      description: "Master the art of planning your money",
      benefits: ["Better expense tracking", "Goal planning"],
    },
    {
      id: "saving",
      name: "Saving",
      level: 2,
      maxLevel: 5,
      xp: 400,
      maxXp: 600,
      unlocked: true,
      description: "Build wealth through smart saving habits",
      benefits: ["Higher interest rates", "Bonus rewards"],
    },
    {
      id: "investing",
      name: "Investing",
      level: 1,
      maxLevel: 5,
      xp: 100,
      maxXp: 300,
      unlocked: true,
      description: "Grow your money through investments",
      benefits: ["Stock market access", "Portfolio tracking"],
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      level: 0,
      maxLevel: 5,
      xp: 0,
      maxXp: 500,
      unlocked: false,
      description: "Start your own business ventures",
      benefits: ["Business planning tools", "Mentor access"],
      requirement: "Reach Saving Level 3",
    },
  ]

  const getSkillColor = (level: number, maxLevel: number) => {
    const percentage = (level / maxLevel) * 100
    if (percentage >= 80) return "text-green-600 bg-green-50 border-green-200"
    if (percentage >= 60) return "text-blue-600 bg-blue-50 border-blue-200"
    if (percentage >= 40) return "text-yellow-600 bg-yellow-50 border-yellow-200"
    return "text-gray-600 bg-gray-50 border-gray-200"
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Skill Tree
            <Badge variant="secondary" className="ml-2">
              {skills.filter((s) => s.unlocked).length}/{skills.length} Unlocked
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
          {skills.map((skill) => {
            const progressPercentage = skill.maxXp > 0 ? (skill.xp / skill.maxXp) * 100 : 0
            const colorClasses = getSkillColor(skill.level, skill.maxLevel)

            return (
              <div
                key={skill.id}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  skill.unlocked ? `${colorClasses} cursor-pointer hover:shadow-sm` : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-sm">{skill.name}</h4>
                      {skill.unlocked ? (
                        <Badge variant="default" className="text-xs">
                          Level {skill.level}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          <Lock className="mr-1 h-3 w-3" />
                          Locked
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{skill.description}</p>

                    {skill.unlocked && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress to Level {skill.level + 1}</span>
                          <span>
                            {skill.xp}/{skill.maxXp} XP
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                      </div>
                    )}

                    {!skill.unlocked && skill.requirement && (
                      <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                        <p className="text-xs text-yellow-800">{skill.requirement}</p>
                      </div>
                    )}

                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground mb-1">Benefits:</p>
                      <div className="space-y-1">
                        {skill.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-xs">
                            <Star className="mr-1 h-3 w-3 text-yellow-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {skill.unlocked && (
                  <div className="mt-3 pt-2 border-t">
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Practice Skill
                    </Button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Level up skills to unlock new opportunities!</p>
            <Button variant="outline" size="sm">
              Skill Challenges
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
