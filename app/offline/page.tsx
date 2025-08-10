import { OfflineMode } from "@/components/offline/offline-mode"
import { BackButton } from "@/components/ui/back-button"

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto p-4">
        <BackButton />
        <OfflineMode />
      </div>
    </div>
  )
}
