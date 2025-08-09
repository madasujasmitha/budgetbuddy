"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Minus, Target, Trophy, Coffee, ShoppingBag, Gamepad2, Bus } from 'lucide-react'

interface ViewAllTransactionsModalProps {
  onClose: () => void
}

export function ViewAllTransactionsModal({ onClose }: ViewAllTransactionsModalProps) {
  const allTransactions = [
    {
      id: 1,
      type: "income",
      title: "Allowance Received",
      description: "Weekly allowance from parents",
      amount: "+$20",
      xp: "+25 XP",
      time: "2 hours ago",
      icon: Plus,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      type: "expense",
      title: "Lunch Purchase",
      description: "School cafeteria meal",
      amount: "-$8",
      xp: "+15 XP",
      time: "4 hours ago",
      icon: Minus,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      type: "goal",
      title: "Goal Progress",
      description: "Saved for new headphones",
      amount: "$45/$100",
      xp: "+30 XP",
      time: "1 day ago",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      type: "achievement",
      title: "Achievement Unlocked",
      description: "First Week Saver badge earned",
      amount: "Badge",
      xp: "+100 XP",
      time: "2 days ago",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      type: "expense",
      title: "Coffee Shop",
      description: "Iced latte with friends",
      amount: "-$5.50",
      xp: "+15 XP",
      time: "3 days ago",
      icon: Coffee,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 6,
      type: "expense",
      title: "New T-shirt",
      description: "Graphic tee from mall",
      amount: "-$25",
      xp: "+15 XP",
      time: "4 days ago",
      icon: ShoppingBag,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 7,
      type: "income",
      title: "Chore Money",
      description: "Cleaned garage for neighbor",
      amount: "+$15",
      xp: "+25 XP",
      time: "5 days ago",
      icon: Plus,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 8,
      type: "expense",
      title: "Game Purchase",
      description: "New indie game on Steam",
      amount: "-$12",
      xp: "+15 XP",
      time: "6 days ago",
      icon: Gamepad2,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 9,
      type: "expense",
      title: "Bus Fare",
      description: "Weekly bus pass",
      amount: "-$10",
      xp: "+15 XP",
      time: "1 week ago",
      icon: Bus,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>All Transactions</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {allTransactions.map((transaction) => {
              const Icon = transaction.icon
              return (
                <div
                  key={transaction.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${transaction.bgColor}`}>
                    <Icon className={`h-4 w-4 ${transaction.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm truncate">{transaction.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {transaction.xp}
                        </Badge>
                        <span className={`text-sm font-semibold ${transaction.color}`}>
                          {transaction.amount}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{transaction.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
