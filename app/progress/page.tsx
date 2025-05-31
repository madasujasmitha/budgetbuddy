"use client"

import { BackButton } from "@/components/ui/back-button"
import { ProgressTracking } from "@/components/progress/progress-tracking"

export default function ProgressPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
        <p className="text-muted-foreground">Monitor your financial journey with detailed analytics and insights</p>
      </div>

      <ProgressTracking />
    </div>
  )
}
