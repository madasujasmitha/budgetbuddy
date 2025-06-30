"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FutureImpact() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <CardTitle className="text-base">Future You</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 mb-3">
          <h3 className="font-bold text-sm">Your Savings Journey</h3>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs text-muted-foreground">Now</span>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold mt-1">$187</span>
            </div>

            <TrendingUp className="h-4 w-4 text-secondary mx-2" />

            <div className="flex flex-col items-center">
              <span className="text-xs text-muted-foreground">1 Year</span>
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-bold mt-1">$1,235</span>
            </div>

            <TrendingUp className="h-4 w-4 text-accent mx-2" />

            <div className="flex flex-col items-center">
              <span className="text-xs text-muted-foreground">College</span>
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <span className="font-bold mt-1">$5,460</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            If you save $20/week through high school, you could have $5,460 for college!
          </p>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
          <h3 className="font-bold text-sm">Power Up Your Future</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Increasing your savings by just $5/week could add $1,300 to your college fund!
          </p>

          <div className="mt-2 flex justify-between">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Future Impact: High
            </Badge>
            <Badge className="bg-primary">+75 XP</Badge>
          </div>

          <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
            Boost Your Future
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
