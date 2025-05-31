"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, TrendingDown, TrendingUp, Coffee, ShoppingBag, PizzaIcon as FastFood } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmotionalInsights() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="mr-2 h-5 w-5 text-primary" />
            <CardTitle>Money Mood</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            Journal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 mb-4">
          <h3 className="font-bold text-sm">Your Spending Patterns</h3>
          <p className="text-xs text-muted-foreground mt-1">
            We've noticed you tend to spend more when you're stressed about school.
          </p>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FastFood className="h-4 w-4 mr-2 text-accent" />
                <span className="text-xs">Fast Food</span>
              </div>
              <Badge variant="outline" className="bg-accent/10 text-accent">
                <TrendingUp className="h-3 w-3 mr-1" />
                During Exams
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Coffee className="h-4 w-4 mr-2 text-secondary" />
                <span className="text-xs">Coffee Shops</span>
              </div>
              <Badge variant="outline" className="bg-secondary/10 text-secondary">
                <TrendingUp className="h-3 w-3 mr-1" />
                Weekday Mornings
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-2 text-primary" />
                <span className="text-xs">Shopping</span>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                <TrendingDown className="h-3 w-3 mr-1" />
                After Saving
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
          <h3 className="font-bold text-sm">Money Mood Challenge</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Try packing lunch during exam week to save on fast food expenses.
          </p>

          <div className="mt-3 flex justify-between">
            <span className="text-xs text-muted-foreground">Potential savings: $25/week</span>
            <Badge className="bg-primary">+50 XP</Badge>
          </div>

          <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
            Accept Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
