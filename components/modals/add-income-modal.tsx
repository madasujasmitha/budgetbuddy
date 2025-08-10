"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

type Props = { onClose?: () => void }

export function AddIncomeModal({ onClose = () => {} }: Props) {
  const [open, setOpen] = useState(true)
  const { toast } = useToast()
  useEffect(() => setOpen(true), [])

  async function handleSubmit(formData: FormData) {
    const amount = Number.parseFloat((formData.get("amount") as string) || "0")
    const source = (formData.get("source") as string) || "Other"
    const date = (formData.get("date") as string) || new Date().toISOString().slice(0, 10)
    if (!amount || amount <= 0) {
      toast({ title: "Please enter a valid amount." })
      return
    }
    const tx = {
      id: crypto.randomUUID(),
      type: "income",
      amount,
      source,
      date,
      createdAt: Date.now(),
    }
    const store = JSON.parse(localStorage.getItem("transactions") || "[]")
    store.push(tx)
    localStorage.setItem("transactions", JSON.stringify(store))
    toast({ title: "Income added!" })
    setOpen(false)
    onClose()
  }

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Income</DialogTitle>
        </DialogHeader>
        <form
          action={(f) => {
            handleSubmit(f)
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" name="amount" type="number" step="0.01" placeholder="0.00" required />
          </div>
          <div>
            <Label>Source</Label>
            <Select name="source" defaultValue="Job">
              <SelectTrigger>
                <SelectValue placeholder="Choose source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Job">Job</SelectItem>
                <SelectItem value="Gift">Gift</SelectItem>
                <SelectItem value="Allowance">Allowance</SelectItem>
                <SelectItem value="Side Hustle">Side Hustle</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
          </div>
          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={() => (setOpen(false), onClose())}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
