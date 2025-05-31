"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts"
import { TrendingUp, Calendar, Award, Target, DollarSign, Zap } from "lucide-react"

interface StatsModalProps {
  isOpen: boolean
  onClose: () => void
  statType: "gold" | "savings" | "quests" | "achievements"
}

// Sample data for different time periods
const generateData = (period: string, statType: string) => {
  const baseData = {
    week: [
      { name: "Mon", value: 45, previous: 40 },
      { name: "Tue", value: 52, previous: 45 },
      { name: "Wed", value: 48, previous: 50 },
      { name: "Thu", value: 61, previous: 55 },
      { name: "Fri", value: 55, previous: 48 },
      { name: "Sat", value: 67, previous: 60 },
      { name: "Sun", value: 72, previous: 65 },
    ],
    month: [
      { name: "Week 1", value: 180, previous: 160 },
      { name: "Week 2", value: 220, previous: 200 },
      { name: "Week 3", value: 195, previous: 180 },
      { name: "Week 4", value: 250, previous: 220 },
    ],
    year: [
      { name: "Jan", value: 850, previous: 800 },
      { name: "Feb", value: 920, previous: 850 },
      { name: "Mar", value: 1100, previous: 950 },
      { name: "Apr", value: 1050, previous: 1000 },
      { name: "May", value: 1200, previous: 1100 },
      { name: "Jun", value: 1350, previous: 1200 },
    ],
    all: [
      { name: "2022", value: 2500, previous: 0 },
      { name: "2023", value: 5200, previous: 2500 },
      { name: "2024", value: 8750, previous: 5200 },
    ],
  }

  const multipliers = {
    gold: 1,
    savings: 0.8,
    quests: 0.1,
    achievements: 0.05,
  }

  const data = baseData[period as keyof typeof baseData] || baseData.week
  const multiplier = multipliers[statType as keyof typeof multipliers] || 1

  return data.map((item) => ({
    ...item,
    value: Math.round(item.value * multiplier),
    previous: Math.round(item.previous * multiplier),
  }))
}

const statConfig = {
  gold: {
    title: "Current Gold",
    icon: DollarSign,
    color: "#f59e0b",
    description: "Your total accumulated gold from completing quests and achievements",
    unit: "G",
  },
  savings: {
    title: "Savings Power",
    icon: TrendingUp,
    color: "#10b981",
    description: "Your total savings and financial growth over time",
    unit: "$",
  },
  quests: {
    title: "Quests Completed",
    icon: Target,
    color: "#8b5cf6",
    description: "Number of financial quests and challenges you've completed",
    unit: "",
  },
  achievements: {
    title: "Achievement Points",
    icon: Award,
    color: "#f97316",
    description: "Points earned from unlocking various achievements",
    unit: "pts",
  },
}

export function StatsModal({ isOpen, onClose, statType }: StatsModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("week")
  const config = statConfig[statType]
  const data = generateData(selectedPeriod, statType)
  const IconComponent = config.icon

  const currentValue = data[data.length - 1]?.value || 0
  const previousValue = data[data.length - 2]?.value || 0
  const growth = previousValue > 0 ? ((currentValue - previousValue) / previousValue) * 100 : 0

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <IconComponent className="mr-2 h-6 w-6" style={{ color: config.color }} />
            {config.title} Analytics
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Current</h3>
                  <p className="text-2xl font-bold" style={{ color: config.color }}>
                    {config.unit}
                    {currentValue.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Growth</h3>
                  <p className={`text-2xl font-bold ${growth >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {growth >= 0 ? "+" : ""}
                    {growth.toFixed(1)}%
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Rank</h3>
                  <p className="text-2xl font-bold text-primary">#{Math.floor(Math.random() * 50) + 1}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{config.description}</p>
            </CardContent>
          </Card>

          {/* Time Period Selector */}
          <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
              <TabsTrigger value="all">All Time</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedPeriod} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      {statType === "gold" || statType === "savings" ? (
                        <AreaChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip
                            formatter={(value) => [`${config.unit}${value}`, config.title]}
                            labelStyle={{ color: "#000" }}
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke={config.color}
                            fill={config.color}
                            fillOpacity={0.3}
                          />
                          <Area type="monotone" dataKey="previous" stroke="#e5e7eb" fill="#f3f4f6" fillOpacity={0.2} />
                        </AreaChart>
                      ) : (
                        <BarChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip
                            formatter={(value) => [`${value}${config.unit}`, config.title]}
                            labelStyle={{ color: "#000" }}
                          />
                          <Bar dataKey="value" fill={config.color} radius={[4, 4, 0, 0]} />
                          <Bar dataKey="previous" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Insights & Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {statType === "gold" && (
                  <>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Tip</Badge>
                      <p className="text-sm">Complete daily quests to earn consistent gold rewards!</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">Insight</Badge>
                      <p className="text-sm">Your gold earning rate has increased by 23% this month.</p>
                    </div>
                  </>
                )}
                {statType === "savings" && (
                  <>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-green-100 text-green-800">Tip</Badge>
                      <p className="text-sm">Try saving $5 more per week to reach your goals faster!</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">Insight</Badge>
                      <p className="text-sm">You're saving 15% more than teens your age on average.</p>
                    </div>
                  </>
                )}
                {statType === "quests" && (
                  <>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-purple-100 text-purple-800">Tip</Badge>
                      <p className="text-sm">Focus on completing 2-3 quests per week for steady progress.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">Insight</Badge>
                      <p className="text-sm">You complete quests 40% faster than when you started!</p>
                    </div>
                  </>
                )}
                {statType === "achievements" && (
                  <>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-orange-100 text-orange-800">Tip</Badge>
                      <p className="text-sm">Check the achievements page for new challenges to unlock!</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">Insight</Badge>
                      <p className="text-sm">You're only 2 achievements away from the next tier!</p>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
