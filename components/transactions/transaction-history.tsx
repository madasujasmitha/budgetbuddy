import { Smile, Meh, MinusIcon as SmileMinus, SmilePlus } from "lucide-react"

type Transaction = {
  id: string
  type: "expense" | "income"
  amount: number
  category: string
  description: string
  date: string
  emotion?: string
  tags: string[]
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "expense",
    amount: 12.99,
    category: "food",
    description: "Lunch at school cafeteria",
    date: "2023-05-15",
    emotion: "neutral",
    tags: ["school", "lunch"],
  },
  {
    id: "2",
    type: "income",
    amount: 20,
    category: "allowance",
    description: "Weekly allowance",
    date: "2023-05-14",
    emotion: "happy",
    tags: ["allowance"],
  },
  {
    id: "3",
    type: "expense",
    amount: 50,
    category: "shopping",
    description: "New shoes",
    date: "2023-05-10",
    emotion: "excited",
    tags: ["shopping", "shoes"],
  },
  {
    id: "4",
    type: "expense",
    amount: 7.5,
    category: "transport",
    description: "Bus fare",
    date: "2023-05-08",
    emotion: "anxious",
    tags: ["transport", "bus"],
  },
  {
    id: "5",
    type: "expense",
    amount: 30,
    category: "entertainment",
    description: "Movie ticket",
    date: "2023-05-05",
    emotion: "regret",
    tags: ["entertainment", "movie"],
  },
]

const TransactionHistory = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Transaction History</h2>
      <div className="space-y-2">
        {mockTransactions.map((transaction) => (
          <div key={transaction.id} className="border rounded-md p-4 shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <p>{transaction.date}</p>
                  {transaction.emotion && (
                    <div className="flex items-center mt-1">
                      {transaction.emotion === "excited" && <SmilePlus className="h-4 w-4 mr-1 text-green-500" />}
                      {transaction.emotion === "happy" && <Smile className="h-4 w-4 mr-1 text-green-400" />}
                      {transaction.emotion === "neutral" && <Meh className="h-4 w-4 mr-1 text-gray-400" />}
                      {transaction.emotion === "anxious" && <SmileMinus className="h-4 w-4 mr-1 text-amber-400" />}
                      {transaction.emotion === "regret" && <Meh className="h-4 w-4 mr-1 text-red-400" />}
                      <span className="text-xs text-muted-foreground capitalize">{transaction.emotion}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {transaction.type === "expense" ? "-" : "+"}
                  {transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { TransactionHistory }
export default TransactionHistory
