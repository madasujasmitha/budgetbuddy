"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, AlertCircle, Lightbulb, Calendar, DollarSign, PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample spending data
const spendingData = {
  thisMonth: {
    food: { amount: 85, budget: 100, transactions: 12 },
    entertainment: { amount: 45, budget: 60, transactions: 6 },
    shopping: { amount: 120, budget: 80, transactions: 8 },
    transport: { amount: 25, budget: 40, transactions: 5 },
  },
  lastMonth: {
    food: { amount: 75, budget: 100, transactions: 10 },
    entertainment: { amount: 65, budget: 60, transactions: 8 },
    shopping: { amount: 90, budget: 80, transactions: 6 },
    transport: { amount: 30, budget: 40, transactions: 6 },
  },
  patterns: {
    weekendSpending: 65, // percentage of spending on weekends
    impulseRate: 35, // percentage of unplanned purchases
    averageTransaction: 12.5,
    mostActiveDay: "Saturday",
    spendingTrend: "increasing", // increasing, decreasing, stable
  },
}

const educationalInsights = {
  overspending: {
    title: "Overspending Alert",
    explanation: "When you spend more than your budget, it can impact your savings goals and create financial stress.",
    tips: [
      "Review what caused the overspending - was it planned or impulsive?",
      "Consider adjusting your budget if your spending reflects changing needs",
      "Look for areas where you can cut back next month",
      "Set up spending alerts to catch overspending early",
    ],
  },
  weekendSpending: {
    title: "Weekend Spending Pattern",
    explanation: "Many people spend more on weekends due to social activities and having more free time.",
    tips: [
      "Plan weekend activities in advance to avoid impulse spending",
      "Set a weekend spending limit before Friday",
      "Look for free or low-cost weekend activities",
      "Consider bringing snacks/drinks instead of buying them out",
    ],
  },
  impulseSpending: {
    title: "Impulse Spending",
    explanation: "Unplanned purchases can quickly derail your budget and savings goals.",
    tips: [
      "Use the 24-hour rule: wait a day before buying non-essentials",
      "Ask yourself: 'Do I need this or just want it?'",
      "Keep a wishlist instead of buying immediately",
      "Calculate how many hours you'd need to work to afford it",
    ],
  },
  goodHabits: {
    title: "Great Financial Habits",
    explanation: "You're showing excellent money management skills that will serve you well in the future!",
    tips: [
      "Keep tracking your spending - awareness is key",
      "Consider increasing your savings rate since you're under budget",
      "Share your strategies with friends who might benefit",
      "Set a new challenge to push your skills further",
    ],
  },
}

export function SpendingAnalysis() {
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null)

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous) * 100
  }

  const getInsightType = (category: string, currentSpend: number, budget: number) => {
    if (currentSpend > budget) return "overspending"
    if (spendingData.patterns.weekendSpending > 60) return "weekendSpending"
    if (spendingData.patterns.impulseRate > 30) return "impulseSpending"
    return "goodHabits"
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-primary" />
            Your Spending Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-primary/20">
                  <CardContent className="p-4 text-center">
                    <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="text-2xl font-bold">$275</p>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                    <p className="text-2xl font-bold">31</p>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <p className="text-2xl font-bold">$8.87</p>
                    <p className="text-sm text-muted-foreground">Avg. Purchase</p>
                  </CardContent>
                </Card>
                <Card className="border-muted">
                  <CardContent className="p-4 text-center">
                    <AlertCircle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-2xl font-bold">65%</p>
                    <p className="text-sm text-muted-foreground">Weekend Spending</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                    Key Insight
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You spend 65% of your money on weekends. This is common for teens, but planning weekend activities
                    in advance can help you stick to your budget while still having fun!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              {Object.entries(spendingData.thisMonth).map(([category, data]) => {
                const change = calculateChange(
                  data.amount,
                  spendingData.lastMonth[category as keyof typeof spendingData.lastMonth].amount,
                )
                const percentage = (data.amount / data.budget) * 100
                const isOverBudget = percentage > 100

                return (
                  <Card key={category} className={`border-2 ${isOverBudget ? "border-red-200" : "border-muted"}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium capitalize">{category}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant={change > 0 ? "destructive" : "default"} className="text-xs">
                            {change > 0 ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {Math.abs(change).toFixed(0)}%
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedInsight(getInsightType(category, data.amount, data.budget))}
                            className="text-xs"
                          >
                            <Lightbulb className="h-3 w-3 mr-1" />
                            Learn
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>
                            ${data.amount} of ${data.budget}
                          </span>
                          <span className={isOverBudget ? "text-red-600 font-medium" : "text-muted-foreground"}>
                            {percentage.toFixed(0)}%
                          </span>
                        </div>
                        <Progress
                          value={Math.min(percentage, 100)}
                          className={`h-2 ${isOverBudget ? "[&>div]:bg-red-500" : "[&>div]:bg-primary"}`}
                        />
                        <p className="text-xs text-muted-foreground">
                          {data.transactions} transactions • Avg: ${(data.amount / data.transactions).toFixed(2)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="grid gap-4">
                {Object.entries(educationalInsights).map(([key, insight]) => (
                  <Card
                    key={key}
                    className="border-primary/20 cursor-pointer hover:bg-primary/5 transition-colors"
                    onClick={() => setSelectedInsight(key)}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                        {insight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{insight.explanation}</p>
                      <Button variant="outline" size="sm">
                        View Tips
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {selectedInsight && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-base flex items-center justify-between">
              <span className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                {educationalInsights[selectedInsight as keyof typeof educationalInsights].title}
              </span>
              <Button variant="ghost" size="sm" onClick={() => setSelectedInsight(null)}>
                ✕
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {educationalInsights[selectedInsight as keyof typeof educationalInsights].explanation}
            </p>
            <div>
              <h5 className="font-medium mb-2">💡 Try These Strategies:</h5>
              <ul className="space-y-2">
                {educationalInsights[selectedInsight as keyof typeof educationalInsights].tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
