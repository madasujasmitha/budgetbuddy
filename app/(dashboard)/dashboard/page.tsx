"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PlayerStats } from "@/components/dashboard/player-stats"
import { MoneyActions } from "@/components/dashboard/money-actions"
import { RecentAdventures } from "@/components/dashboard/recent-adventures"
import { DailyQuests } from "@/components/dashboard/daily-quests"
import { QuestProgress } from "@/components/dashboard/quest-progress"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <DashboardHeader />

        {/* Player Stats */}
        <PlayerStats />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Money Actions */}
            <MoneyActions />

            {/* Recent Activity */}
            <RecentAdventures />
          </div>

          {/* Right Column - Goals & Quests */}
          <div className="space-y-6">
            {/* Daily Quests */}
            <DailyQuests />

            {/* Goal Progress */}
            <QuestProgress />
          </div>
        </div>
      </div>
    </div>
  )
}
