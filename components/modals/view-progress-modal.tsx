"use client"

import { useEffect, useMemo, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Tx = { type: "income" | "expense"; amount: number }
type Goal = { target: number; saved: number }

export function ViewProgressModal({ onClose }: { onClose: () => void }) {
  const [txs, setTxs] = useState<Tx[]>([])
  const [goals, setGoals] = useState<Goal[]>([])

  useEffect(() => {
    try {
      setTxs(JSON.parse(localStorage.getItem("bb_transactions") || "[]"))
      setGoals(JSON.parse(localStorage.getItem("bb_goals") || "[]"))
    } catch {
      setTxs([])
      setGoals([])
    }
  }, [])

  const { income, expense, balance } = useMemo(() => {
    const income = txs.filter((t) => t.type === "income").reduce((a, b) => a + (b.amount || 0), 0)
    const expense = txs.filter((t) => t.type === "expense").reduce((a, b) => a + (b.amount || 0), 0)
    return { income, expense, balance: income - expense }
  }, [txs])

  const goalsProgress = useMemo(() => {
    if (!goals.length) return 0
    const totalTarget = goals.reduce((a, b) => a + (b.target || 0), 0)
    const totalSaved = goals.reduce((a, b) => a + (b.saved || 0), 0)
    return totalTarget ? Math.min(100, Math.round((totalSaved / totalTarget) * 100)) : 0
  }, [goals])

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Your Progress</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-xl font-bold text-green-700">${income.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Income</div>
            </div>
            <div className="rounded-lg bg-red-50 p-3">
              <div className="text-xl font-bold text-red-700">${expense.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Expenses</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className={`text-xl font-bold ${balance >= 0 ? "text-blue-700" : "text-red-700"}`}>
                ${balance.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">Balance</div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="text-sm mb-2 font-medium">Goals Progress</div>
            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
              <div className="h-3 bg-primary" style={{ width: `${goalsProgress}%` }} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">{goalsProgress}% complete</div>
          </div>

          <p className="text-xs text-muted-foreground">
            Tip: Keep logging income/expenses and updating goals to see progress improve over time.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
