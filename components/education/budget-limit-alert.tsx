"use client"

import { useState } from "react"
import { AlertTriangle, BookOpen, TrendingUp, Target, X, Lightbulb } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BudgetLimitAlertProps {
  category: string
  spent: number
  limit: number
  percentage: number
}

const educationalTips = {
  food: {
    title: "Smart Food Budgeting",
    tips: [
      "Try meal planning to reduce impulse food purchases",
      "Cook at home more often - it's usually 3x cheaper than eating out",
      "Buy generic brands to save 20-30% on groceries",
      "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings",
    ],
    insight:
      "Food spending often reveals emotional patterns. Track when and why you spend on food to identify triggers.",
  },
  entertainment: {
    title: "Entertainment Budget Wisdom",
    tips: [
      "Look for free community events and activities",
      "Share streaming subscriptions with family",
      "Set a monthly entertainment allowance and stick to it",
      "Choose experiences over things - they create lasting memories",
    ],
    insight:
      "Entertainment spending can quickly spiral. Consider the 'cost per hour' of activities to make smarter choices.",
  },
  shopping: {
    title: "Smart Shopping Strategies",
    tips: [
      "Wait 24 hours before making non-essential purchases",
      "Use the 'need vs want' test before buying",
      "Compare prices across different stores",
      "Ask yourself: 'Will I still want this in a month?'",
    ],
    insight:
      "Impulse purchases account for 40% of teen spending. Creating a wishlist can help you prioritize what you really want.",
  },
  transport: {
    title: "Transportation Tips",
    tips: [
      "Walk or bike for short distances to save money and stay healthy",
      "Use public transportation when available",
      "Carpool with friends to split costs",
      "Plan your trips to combine multiple errands",
    ],
    insight:
      "Transportation costs add up quickly. Planning your routes and combining trips can save both money and time.",
  },
}

export function BudgetLimitAlert({ category, spent, limit, percentage }: BudgetLimitAlertProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed || percentage < 80) return null

  const isOverBudget = percentage >= 100
  const isNearLimit = percentage >= 80 && percentage < 100
  const categoryTips = educationalTips[category as keyof typeof educationalTips] || educationalTips.shopping

  return (
    <>
      <Alert
        className={`border-2 ${isOverBudget ? "border-red-200 bg-red-50" : "border-yellow-200 bg-yellow-50"} mb-4`}
      >
        <AlertTriangle className={`h-4 w-4 ${isOverBudget ? "text-red-600" : "text-yellow-600"}`} />
        <AlertDescription className="flex items-center justify-between">
          <div>
            <p className="font-medium">{isOverBudget ? "🚨 Budget Exceeded!" : "⚠️ Approaching Budget Limit"}</p>
            <p className="text-sm">
              You've spent ${spent} of your ${limit} {category} budget ({percentage}%)
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => setIsExpanded(true)} className="text-xs">
              <Lightbulb className="h-3 w-3 mr-1" />
              Get Tips
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsDismissed(true)} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              {categoryTips.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Financial Insight
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{categoryTips.insight}</p>
              </CardContent>
            </Card>

            <div>
              <h4 className="font-medium mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Smart Strategies to Try:
              </h4>
              <ul className="space-y-2">
                {categoryTips.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">💡 Pro Tip:</p>
              <p className="text-sm">
                {isOverBudget
                  ? "Don't worry! Going over budget occasionally is normal. Use this as a learning opportunity to adjust your spending habits."
                  : "Great job monitoring your spending! Consider setting aside any remaining budget for next month or your savings goals."}
              </p>
            </div>

            <Button onClick={() => setIsExpanded(false)} className="w-full bg-primary hover:bg-primary/90">
              Got it! Thanks for the tips
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
