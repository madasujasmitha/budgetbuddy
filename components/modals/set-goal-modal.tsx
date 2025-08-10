"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

type Props = { onClose?: () => void }

export function SetGoalModal({ onClose = () => {} }: Props) {
  const [open, setOpen] = useState(true)
  const { toast } = useToast()
  useEffect(() => setOpen(true), [])

  async function handleSubmit(formData: FormData) {
    const name = (formData.get("name") as string) || ""
    const target = Number.parseFloat((formData.get("target") as string) || "0")
    const deadline = (formData.get("deadline") as string) || ""
    if (!name || !target || target <= 0) {
      toast({ title: "Please fill all required fields." })
      return
    }
    const goal = {
      id: crypto.randomUUID(),
      name,
      target,
      current: 0,
      deadline,
      createdAt: Date.now(),
    }
    const store = JSON.parse(localStorage.getItem("goals") || "[]")
    store.push(goal)
    localStorage.setItem("goals", JSON.stringify(store))
    toast({ title: "Goal created!" })
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
          <DialogTitle>Set New Goal</DialogTitle>
        </DialogHeader>
        <form
          action={(f) => {
            handleSubmit(f)
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="name">Goal name</Label>
            <Input id="name" name="name" placeholder="e.g., New Laptop" required />
          </div>
          <div>
            <Label htmlFor="target">Target amount</Label>
            <Input id="target" name="target" type="number" step="0.01" placeholder="500.00" required />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input id="deadline" name="deadline" type="date" />
          </div>
          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={() => (setOpen(false), onClose())}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
