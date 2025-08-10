const MoneyJournal = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Money Journal</h1>
      <p className="text-gray-600 mb-4">A record of your financial transactions and reflections.</p>

      {/* Journal Entries Section (Placeholder) */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Recent Entries</h2>
        <p className="text-sm text-muted-foreground">No entries yet. Start tracking your transactions!</p>
        {/* Add actual journal entry components here */}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Transaction Emotions</h3>
        <p className="text-sm text-muted-foreground mb-4">Your recent transactions show these emotional patterns:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-green-500">Positive Emotions</h4>
            <p className="text-sm">42% of your transactions are associated with positive feelings.</p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-amber-500">Neutral Emotions</h4>
            <p className="text-sm">35% of your transactions don't trigger strong emotions.</p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-red-500">Negative Emotions</h4>
            <p className="text-sm">23% of your transactions are associated with regret or anxiety.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyJournal
export { MoneyJournal }
