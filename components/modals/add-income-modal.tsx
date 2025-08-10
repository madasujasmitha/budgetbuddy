"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

type Props = { onClose: () => void }

type Tx = {
  id: string
  type: "income"
  amount: number
  category: string
  note?: string
  date: string
}

export function AddIncomeModal({ onClose }: Props) {
  const { toast } = useToast()
  const [amount, setAmount] = useState<string>("")
  const [category, setCategory] = useState<string>("allowance")
  const [note, setNote] = useState<string>("")
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10))

  const save = () => {
    const value = Number.parseFloat(amount)
    if (!value || value <= 0) return
    const tx: Tx = {
      id: crypto.randomUUID(),
      type: "income",
      amount: value,
      category,
      note: note.trim() || undefined,
      date,
    }
    const existing = JSON.parse(localStorage.getItem("bb_transactions") || "[]")
    existing.unshift(tx)
    localStorage.setItem("bb_transactions", JSON.stringify(existing))
    toast({ title: "Income added", description: `Logged $${value.toFixed(2)} (${category})` })
    onClose()
  }

  // close on escape or background handled by Dialog
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Income</DialogTitle>
          <DialogDescription>Log money you've earned to track your progress.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="income-amount">Amount</Label>
            <Input
              id="income-amount"
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 25.00"
            />
          </div>
          <div className="grid gap-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="allowance">Allowance</SelectItem>
                <SelectItem value="part-time">Part-time job</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="income-date">Date</Label>
            <Input id="income-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="income-note">Note</Label>
            <Textarea
              id="income-note"
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
