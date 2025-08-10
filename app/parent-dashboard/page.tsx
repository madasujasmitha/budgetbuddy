import { ParentDashboard } from "@/components/parental/parent-dashboard"
import { BackButton } from "@/components/ui/back-button"

export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto p-4">
        <BackButton />
        <ParentDashboard />
      </div>
    </div>
  )
}
