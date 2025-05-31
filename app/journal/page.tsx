import { MoneyJournal } from "@/components/journal/money-journal"
import { BackButton } from "@/components/ui/back-button"

export default function JournalPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Money Journal</h1>
      <MoneyJournal />
    </div>
  )
}
