import { GlobalEconomicsExplorer } from "@/components/economics/global-economics-explorer"
import { BackButton } from "@/components/ui/back-button"

export default function EconomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="container mx-auto p-4">
        <BackButton />
        <GlobalEconomicsExplorer />
      </div>
    </div>
  )
}
