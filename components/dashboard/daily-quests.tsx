"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle2, Circle, MessageSquare, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function DailyQuests() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Daily Quests</CardTitle>
          </div>
          <Badge className="bg-primary/20 text-primary">
            <Brain className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                <span className="font-medium">No-Spend Day</span>
              </div>
              <Badge className="bg-green-500">+25 XP</Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              You've gone a full day without spending! Keep it up for a streak bonus.
            </p>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="mr-2 h-5 w-5 text-primary" />
                <span className="font-medium">Coffee Shop Challenge</span>
              </div>
              <Badge className="bg-primary">+50 XP</Badge>
            </div>
            <div className="mt-1 flex items-center">
              <MessageSquare className="h-3 w-3 mr-1 text-primary" />
              <p className="text-xs text-muted-foreground italic">
                "I noticed you spend about $15/week at coffee shops. Try making coffee at home 2 days this week."
              </p>
            </div>
            <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
              Accept Challenge
            </Button>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="mr-2 h-5 w-5 text-primary" />
                <span className="font-medium">Track School Expenses</span>
              </div>
              <Badge className="bg-primary">+15 XP</Badge>
            </div>
            <div className="mt-1 flex items-center">
              <MessageSquare className="h-3 w-3 mr-1 text-primary" />
              <p className="text-xs text-muted-foreground italic">
                "Finals week is coming up. Let's track your study-related expenses to prepare for next semester."
              </p>
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-xs text-muted-foreground">Progress: 1/4</span>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Add Expense
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
