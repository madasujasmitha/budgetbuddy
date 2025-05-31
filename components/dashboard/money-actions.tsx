"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react"

// Sample data for the charts
const weeklyData = [
  { name: "Mon", income: 0, expenses: 15 },
  { name: "Tue", income: 20, expenses: 5 },
  { name: "Wed", income: 0, expenses: 12 },
  { name: "Thu", income: 0, expenses: 8 },
  { name: "Fri", income: 30, expenses: 25 },
  { name: "Sat", income: 15, expenses: 20 },
  { name: "Sun", income: 0, expenses: 10 },
]

const categoryData = [
  { name: "Food", value: 35 },
  { name: "Fun", value: 25 },
  { name: "Travel", value: 15 },
  { name: "School", value: 10 },
  { name: "Savings", value: 15 },
]

export function MoneyActions() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-primary" />
          Money Powers
        </CardTitle>
        <CardDescription>Track your gold flow and spending powers</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground">Quick Actions</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button className="h-auto flex-col items-center justify-center gap-2 bg-secondary py-4 hover:bg-secondary/90">
                <ArrowUpRight className="h-5 w-5" />
                <span>Add Income</span>
              </Button>
              <Button className="h-auto flex-col items-center justify-center gap-2 bg-accent py-4 hover:bg-accent/90">
                <ArrowDownRight className="h-5 w-5" />
                <span>Add Expense</span>
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-medium">Money Powers</h4>
              <div className="space-y-2">
                <div className="rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">No-Spend Challenge</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      +50 XP
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Go 3 days without spending</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Savings Boost</span>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary">
                      +75 XP
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Save 20% of your next income</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 p-4">
            <Tabs defaultValue="weekly">
              <div className="flex items-center justify-between">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="weekly">Weekly Stats</TabsTrigger>
                  <TabsTrigger value="categories">Spending Powers</TabsTrigger>
                </TabsList>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-secondary mr-1"></div>
                    <span className="text-sm text-muted-foreground">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-accent mr-1"></div>
                    <span className="text-sm text-muted-foreground">Expenses</span>
                  </div>
                </div>
              </div>
              <TabsContent value="weekly" className="pt-4">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Chart>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <Bar dataKey="income" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expenses" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                      </Chart>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="categories" className="pt-4">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={80} />
                      <Chart>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                      </Chart>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Badge({ className, variant, ...props }: React.ComponentProps<"div"> & { variant?: string }) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        variant === "outline" ? "border" : ""
      } ${className}`}
      {...props}
    />
  )
}
