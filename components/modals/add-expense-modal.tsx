"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

type Props = { onClose: () => void }
type Tx = {
  id: string
  type: "expense"
  amount: number
  category: string
  note?: string
  date: string
}

export function AddExpenseModal({ onClose }: Props) {
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("food")
  const [note, setNote] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const save = () => {
    const value = Number.parseFloat(amount)
    if (!value || value <= 0) return
    const tx: Tx = {
      id: crypto.randomUUID(),
      type: "expense",
      amount: value,
      category,
      note: note.trim() || undefined,
      date,
    }
    const existing = JSON.parse(localStorage.getItem("bb_transactions") || "[]")
    existing.unshift(tx)
    localStorage.setItem("bb_transactions", JSON.stringify(existing))
    toast({ title: "Expense added", description: `Logged $${value.toFixed(2)} (${category})` })
    onClose()
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Track Expense</DialogTitle>
          <DialogDescription>Record what you spent to stay on budget.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="expense-amount">Amount</Label>
            <Input
              id="expense-amount"
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 8.99"
            />
          </div>
          <div className="grid gap-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expense-date">Date</Label>
            <Input id="expense-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expense-note">Note</Label>
            <Textarea
              id="expense-note"
              placeholder="Optional note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={save}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
