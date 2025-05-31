"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Award, Sparkles, Gift } from "lucide-react"

export function LevelUpModal() {
  const [open, setOpen] = useState(false)

  // Simulate level up after 3 seconds for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-4 border-primary bg-gradient-to-b from-background to-primary/5 p-0 sm:max-w-md">
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-primary to-accent py-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZsMyAxMHpNMzAgMzBoLTZsMyAxMHpNMjQgMzBoLTZsMyAxMHpNMTggMzBoLTZsMyAxMHpNMTIgMzBINmwzIDEwek00MiAzMGgtNmwzIDEwek00OCAzMGgtNmwzIDEwek01NCAzMGgtNmwzIDEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative flex flex-col items-center justify-center text-center text-white">
            <div className="mb-2 rounded-full bg-white/20 p-3">
              <Award className="h-10 w-10 animate-pulse-slow" />
            </div>
            <h2 className="text-2xl font-bold">LEVEL UP!</h2>
            <p className="mt-1 text-white/80">You've reached Level 6!</p>
            <div className="mt-4 flex items-center justify-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                <span className="text-4xl font-bold">6</span>
                <div className="absolute -inset-1 animate-spin-slow rounded-full border-2 border-dashed border-white/40" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-lg font-bold">New Powers Unlocked!</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <div className="flex flex-col items-center">
                <Sparkles className="h-8 w-8 text-primary" />
                <h4 className="mt-2 font-medium">Savings Boost</h4>
                <p className="mt-1 text-xs text-muted-foreground">+5% interest on savings</p>
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <div className="flex flex-col items-center">
                <Gift className="h-8 w-8 text-accent" />
                <h4 className="mt-2 font-medium">New Quest Types</h4>
                <p className="mt-1 text-xs text-muted-foreground">Unlock advanced quests</p>
              </div>
            </div>
          </div>

          <Button className="mt-6 w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            Claim Your Rewards
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
