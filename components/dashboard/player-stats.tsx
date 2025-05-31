"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles, TrendingUp, Target, Award, DollarSign } from "lucide-react"
import { StatsModal } from "./stats-modal"

export function PlayerStats() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStat, setSelectedStat] = useState<"gold" | "savings" | "quests" | "achievements">("gold")

  const handleStatClick = (statType: "gold" | "savings" | "quests" | "achievements") => {
    setSelectedStat(statType)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player Profile Card */}
        <Card className="border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="h-16 w-16 border-4 border-primary/20">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Jamie Doe</h2>
                <p className="text-muted-foreground">Financial Adventurer</p>
                <div className="flex items-center mt-2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">Level 7</Badge>
                  <span className="text-sm text-muted-foreground ml-2">Next: 250 XP</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to Level 8</span>
                <span>750/1000 XP</span>
              </div>
              <Progress
                value={75}
                className="h-2 bg-primary/10 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Card
            className="border-2 border-primary/20 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleStatClick("gold")}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Gold</p>
                  <p className="text-xl font-bold text-yellow-500">1,247G</p>
                </div>
                <DollarSign className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-primary/20 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleStatClick("savings")}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Savings Power</p>
                  <p className="text-xl font-bold text-green-500">$187</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-primary/20 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleStatClick("quests")}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quests Completed</p>
                  <p className="text-xl font-bold text-purple-500">23</p>
                </div>
                <Target className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-primary/20 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleStatClick("achievements")}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievement Points</p>
                  <p className="text-xl font-bold text-orange-500">450</p>
                </div>
                <Award className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <StatsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} statType={selectedStat} />
    </>
  )
}
