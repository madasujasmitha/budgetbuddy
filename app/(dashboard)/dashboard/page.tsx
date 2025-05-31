"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PlayerStats } from "@/components/dashboard/player-stats"
import { MoneyActions } from "@/components/dashboard/money-actions"
import { RecentAdventures } from "@/components/dashboard/recent-adventures"
import { AchievementShowcase } from "@/components/dashboard/achievement-showcase"
import { JobQuests } from "@/components/dashboard/job-quests"
import { SkillTree } from "@/components/dashboard/skill-tree"
import { EmotionalInsights } from "@/components/dashboard/emotional-insights"
import { FutureImpact } from "@/components/dashboard/future-impact"
import { DailyQuests } from "@/components/dashboard/daily-quests"
import { QuestProgress } from "@/components/dashboard/quest-progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <DashboardHeader />

      {/* Main Stats */}
      <PlayerStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Primary Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <MoneyActions />

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuestProgress />
            <DailyQuests />
          </div>

          {/* Recent Activity */}
          <RecentAdventures />

          {/* Skills and Jobs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillTree />
            <JobQuests />
          </div>
        </div>

        {/* Right Column - Secondary Info */}
        <div className="space-y-6">
          {/* Achievements */}
          <AchievementShowcase />

          {/* Motivational Image Card */}
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Your Financial Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-4 mb-4">
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Teen achieving financial goals"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                "Every small step counts towards your big dreams!"
              </p>
            </CardContent>
          </Card>

          {/* Emotional Insights */}
          <EmotionalInsights />

          {/* Future Impact */}
          <FutureImpact />

          {/* Tips Card */}
          <Card className="border-2 border-accent/20">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-secondary/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Zap className="mr-2 h-5 w-5 text-accent" />
                Pro Tip
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-4 mb-3">
                <img
                  src="/placeholder.svg?height=100&width=150"
                  alt="Money saving tip illustration"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-sm font-medium mb-2">Track your emotions with spending</p>
              <p className="text-xs text-muted-foreground">
                Understanding how you feel when you spend helps you make better financial decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
