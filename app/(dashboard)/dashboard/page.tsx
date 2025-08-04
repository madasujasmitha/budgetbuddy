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

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <DashboardHeader />

        {/* Player Stats */}
        <PlayerStats />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Money Actions */}
            <MoneyActions />

            {/* Recent Adventures */}
            <RecentAdventures />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Daily Quests */}
            <DailyQuests />

            {/* Quest Progress */}
            <QuestProgress />
          </div>
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Achievement Showcase */}
          <AchievementShowcase />

          {/* Job Quests */}
          <JobQuests />

          {/* Skill Tree */}
          <SkillTree />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Emotional Insights */}
          <EmotionalInsights />

          {/* Future Impact */}
          <FutureImpact />
        </div>
      </div>
    </div>
  )
}
