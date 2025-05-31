import { AiCoach } from "@/components/coach/ai-coach"
import { BackButton } from "@/components/ui/back-button"

export default function CoachPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">AI Money Mentor</h1>
      <AiCoach />
    </div>
  )
}
