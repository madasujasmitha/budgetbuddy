"use client"

import { useEffect, useMemo, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = { onClose?: () => void }

export function ViewProgressModal({ onClose = () => {} }: Props) {
  const [open, setOpen] = useState(true)
  useEffect(() => setOpen(true), [])

  const tx = useMemo(() => {
    if (typeof window === "undefined") return []
    try {
      return JSON.parse(localStorage.getItem("transactions") || "[]") as {
        type: "income" | "expense"
        amount: number
        date: string
      }[]
    } catch {
      return []
    }
  }, [])

  const goals = useMemo(() => {
    if (typeof window === "undefined") return []
    try {
      return JSON.parse(localStorage.getItem("goals") || "[]") as {
        id: string
        name: string
        target: number
        current: number
        deadline?: string
      }[]
    } catch {
      return []
    }
  }, [])

  const totals = useMemo(() => {
    const income = tx.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0)
    const expense = tx.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0)
    return { income, expense, net: income - expense }
  }, [tx])

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          setOpen(false)
          onClose()
        }
      }}
    >
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Your Progress</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Income</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-green-600">${totals.income.toFixed(2)}</CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-red-600">${totals.expense.toFixed(2)}</CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Net</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">${totals.net.toFixed(2)}</CardContent>
          </Card>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {goals.length === 0 ? (
            <Card>
              <CardContent className="p-4 text-sm text-muted-foreground">
                No goals yet. Create one to get started.
              </CardContent>
            </Card>
          ) : (
            goals.map((g) => {
              const pct = Math.min(100, Math.round(((g.current || 0) / g.target) * 100))
              return (
                <Card key={g.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{g.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 p-4 pt-0">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${(g.current || 0).toFixed(2)}</span>
                      <span>${g.target.toFixed(2)}</span>
                    </div>
                    <div className="h-2 w-full rounded bg-muted">
                      <div className="h-2 rounded bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                    {g.deadline && <div className="text-xs text-muted-foreground">Due {g.deadline}</div>}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
