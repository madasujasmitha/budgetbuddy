"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

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
  { name: "Entertainment", value: 25 },
  { name: "Transport", value: 15 },
  { name: "School", value: 10 },
  { name: "Savings", value: 15 },
]

export function DashboardCharts() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Your weekly income and expenses summary</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-teal-500 mr-1"></div>
                <span className="text-sm text-muted-foreground">Income</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-rose-500 mr-1"></div>
                <span className="text-sm text-muted-foreground">Expenses</span>
              </div>
            </div>
          </div>
          <TabsContent value="weekly" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Chart>
                    <ChartTooltip>
                      <ChartTooltipContent />
                    </ChartTooltip>
                    <Bar dataKey="income" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  </Chart>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="categories" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Chart>
                    <ChartTooltip>
                      <ChartTooltipContent />
                    </ChartTooltip>
                    <Bar dataKey="value" fill="#14b8a6" radius={[0, 4, 4, 0]} />
                  </Chart>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
