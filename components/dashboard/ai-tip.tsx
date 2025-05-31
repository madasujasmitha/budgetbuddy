"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LightbulbIcon, ThumbsUp, ThumbsDown } from "lucide-react"

export function AiTip() {
  return (
    <Card className="border-teal-200 bg-teal-50 dark:border-teal-900 dark:bg-teal-950/30">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <LightbulbIcon className="h-5 w-5 text-teal-500" />
          <CardTitle className="text-base">AI Tip of the Day</CardTitle>
        </div>
        <CardDescription>Personalized financial advice</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          You saved 12% of your allowance this week. Want to double it? Try the 50/30/20 rule: 50% for needs, 30% for
          wants, and 20% for savings.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            Tell me more
          </Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
