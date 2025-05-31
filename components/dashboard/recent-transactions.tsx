"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Coffee, ShoppingBag, Gamepad2, Bus } from "lucide-react"

// Sample transaction data
const transactions = [
  {
    id: 1,
    name: "Starbucks",
    category: "Food",
    amount: -6.5,
    date: "Today, 10:30 AM",
    icon: Coffee,
  },
  {
    id: 2,
    name: "Babysitting",
    category: "Income",
    amount: 30.0,
    date: "Yesterday, 6:00 PM",
    icon: ArrowUpRight,
  },
  {
    id: 3,
    name: "Target",
    category: "Shopping",
    amount: -15.75,
    date: "May 14, 3:45 PM",
    icon: ShoppingBag,
  },
  {
    id: 4,
    name: "Game Pass",
    category: "Entertainment",
    amount: -9.99,
    date: "May 13, 8:20 AM",
    icon: Gamepad2,
  },
  {
    id: 5,
    name: "Bus Fare",
    category: "Transport",
    amount: -2.5,
    date: "May 12, 7:30 AM",
    icon: Bus,
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest financial activities</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    transaction.amount > 0 ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  <transaction.icon
                    className={`h-5 w-5 ${transaction.amount > 0 ? "text-green-500" : "text-gray-500"}`}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={transaction.category === "Income" ? "outline" : "secondary"} className="text-xs">
                  {transaction.category}
                </Badge>
                <span className={`text-sm font-medium ${transaction.amount > 0 ? "text-green-600" : ""}`}>
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
