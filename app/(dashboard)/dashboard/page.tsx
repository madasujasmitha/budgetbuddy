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
      <div className="mx-auto max-w-6xl space-y-6">
        <DashboardHeader />
        <PlayerStats />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* Single Quick Actions bar */}
            <MoneyActions />
            <RecentAdventures />
          </div>
          <div className="space-y-6">
            <DailyQuests />
            <QuestProgress />
          </div>
        </div>
      </div>
    </div>
  )
}
