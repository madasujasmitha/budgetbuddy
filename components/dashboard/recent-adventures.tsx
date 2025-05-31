"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Coffee, ShoppingBag, Gamepad2, Bus, Sparkles } from "lucide-react"

// Sample transaction data
const adventures = [
  {
    id: 1,
    name: "Starbucks",
    category: "Food",
    amount: -6.5,
    date: "Today, 10:30 AM",
    icon: Coffee,
    xp: 5,
  },
  {
    id: 2,
    name: "Babysitting",
    category: "Income",
    amount: 30.0,
    date: "Yesterday, 6:00 PM",
    icon: ArrowUpRight,
    xp: 15,
    achievement: "First Job",
  },
  {
    id: 3,
    name: "Target",
    category: "Shopping",
    amount: -15.75,
    date: "May 14, 3:45 PM",
    icon: ShoppingBag,
    xp: 5,
  },
  {
    id: 4,
    name: "Game Pass",
    category: "Entertainment",
    amount: -9.99,
    date: "May 13, 8:20 AM",
    icon: Gamepad2,
    xp: 5,
  },
  {
    id: 5,
    name: "Bus Fare",
    category: "Transport",
    amount: -2.5,
    date: "May 12, 7:30 AM",
    icon: Bus,
    xp: 5,
  },
]

export function RecentAdventures() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            <CardTitle>Recent Adventures</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center space-x-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    adventure.amount > 0
                      ? "bg-gradient-to-br from-green-400 to-green-500"
                      : "bg-gradient-to-br from-accent to-accent/80"
                  }`}
                >
                  <adventure.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{adventure.name}</p>
                  <p className="text-xs text-muted-foreground">{adventure.date}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <span className={`font-bold ${adventure.amount > 0 ? "text-green-500" : ""}`}>
                  {adventure.amount > 0 ? "+" : ""}${Math.abs(adventure.amount).toFixed(2)}
                </span>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className={`${
                      adventure.category === "Income"
                        ? "border-green-200 bg-green-100 text-green-700"
                        : "border-accent/20 bg-accent/10 text-accent-foreground"
                    }`}
                  >
                    {adventure.category}
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                    +{adventure.xp} XP
                  </Badge>
                </div>
                {adventure.achievement && (
                  <Badge className="mt-1 bg-yellow-500/20 text-yellow-700">
                    <Trophy className="mr-1 h-3 w-3" /> {adventure.achievement}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
