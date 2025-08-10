"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

type Props = { onClose: () => void }
type Goal = {
  id: string
  name: string
  target: number
  saved: number
  deadline?: string
  category: string
  createdAt: string
}

export function SetGoalModal({ onClose }: Props) {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [target, setTarget] = useState("")
  const [deadline, setDeadline] = useState("")
  const [category, setCategory] = useState("savings")

  const save = () => {
    const t = Number.parseFloat(target)
    if (!name.trim() || !t || t <= 0) return
    const goal: Goal = {
      id: crypto.randomUUID(),
      name: name.trim(),
      target: t,
      saved: 0,
      deadline: deadline || undefined,
      category,
      createdAt: new Date().toISOString(),
    }
    const existing = JSON.parse(localStorage.getItem("bb_goals") || "[]")
    existing.unshift(goal)
    localStorage.setItem("bb_goals", JSON.stringify(existing))
    toast({ title: "Goal created", description: `${goal.name} ($${goal.target.toFixed(2)})` })
    onClose()
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Set New Goal</DialogTitle>
          <DialogDescription>Create a savings target and track your progress.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="goal-name">Goal name</Label>
            <Input id="goal-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. New bike" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="goal-target">Target amount</Label>
            <Input
              id="goal-target"
              type="number"
              min="0"
              step="0.01"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="e.g. 200.00"
            />
          </div>
          <div className="grid gap-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="fun">Fun</SelectItem>
                <SelectItem value="gear">Gear</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="goal-deadline">Deadline (optional)</Label>
            <Input id="goal-deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
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
