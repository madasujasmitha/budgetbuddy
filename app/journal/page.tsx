import MoneyJournal from "@/components/journal/money-journal"

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-5xl">
        <MoneyJournal />
      </div>
    </div>
  )
}
