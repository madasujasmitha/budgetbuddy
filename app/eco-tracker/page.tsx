import { EcoSpendingTracker } from "@/components/eco/eco-spending-tracker"
import { BackButton } from "@/components/ui/back-button"

export default function EcoTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto p-4">
        <BackButton />
        <EcoSpendingTracker />
      </div>
    </div>
  )
}
