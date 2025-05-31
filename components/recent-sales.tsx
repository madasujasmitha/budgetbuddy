"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentTransactions = [
  {
    id: 1,
    name: "Starbucks Coffee",
    category: "Food",
    amount: -18.5,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SC",
  },
  {
    id: 2,
    name: "Freelance Payment",
    category: "Income",
    amount: 450.0,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "FP",
  },
  {
    id: 3,
    name: "Netflix Subscription",
    category: "Entertainment",
    amount: -24.99,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "NF",
  },
  {
    id: 4,
    name: "Gas Station",
    category: "Transportation",
    amount: -45.2,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "GS",
  },
  {
    id: 5,
    name: "Cashback Reward",
    category: "Income",
    amount: 25.0,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "CB",
  },
]

export function RecentSales() {
  return (
    <div className="space-y-8">
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={transaction.avatar || "/placeholder.svg"} alt={transaction.name} />
            <AvatarFallback>{transaction.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.name}</p>
            <p className="text-sm text-muted-foreground">{transaction.category}</p>
          </div>
          <div className="ml-auto font-medium">
            <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
