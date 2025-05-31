"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts"

// Demo data based on the scenarios provided
const budgetData = {
  categories: [
    { name: "Transportation", spent: 226.75, limit: 200, status: "over", percentage: 113 },
    { name: "Entertainment", spent: 198.73, limit: 150, status: "over", percentage: 132 },
    { name: "Shopping", spent: 348.52, limit: 300, status: "over", percentage: 116 },
    { name: "Other", spent: 290, limit: 200, status: "over", percentage: 145 },
    { name: "Healthcare", spent: 190.99, limit: 250, status: "warning", percentage: 76 },
    { name: "Utilities", spent: 324.5, limit: 350, status: "warning", percentage: 93 },
    { name: "Food", spent: 396.83, limit: 450, status: "good", percentage: 88 },
  ],
}

const goalData = [
  { name: "Emergency Fund", current: 2350, target: 5000, percentage: 47, deadline: "Dec 2024" },
  { name: "Vacation Fund", current: 1650, target: 2500, percentage: 66, deadline: "Jun 2024" },
  { name: "Laptop Fund", current: 750, target: 1200, percentage: 63, deadline: "Aug 2024" },
  { name: "Car Fund", current: 3200, target: 8000, percentage: 40, deadline: "Dec 2025" },
]

const monthlyTrends = [
  { month: "Jan", income: 3200, expenses: 2890, savings: 310 },
  { month: "Feb", income: 3200, expenses: 3100, savings: 100 },
  { month: "Mar", income: 3650, expenses: 3200, savings: 450 },
  { month: "Apr", income: 3200, expenses: 2950, savings: 250 },
  { month: "May", income: 3675, expenses: 3400, savings: 275 },
  { month: "Jun", income: 3200, expenses: 3150, savings: 50 },
]

const spendingByCategory = [
  { name: "Food", value: 396.83, color: "#10b981" },
  { name: "Transportation", value: 226.75, color: "#ef4444" },
  { name: "Entertainment", value: 198.73, color: "#f59e0b" },
  { name: "Shopping", value: 348.52, color: "#8b5cf6" },
  { name: "Utilities", value: 324.5, color: "#06b6d4" },
  { name: "Healthcare", value: 190.99, color: "#ec4899" },
  { name: "Other", value: 290, color: "#6b7280" },
]

const financialHealthScore = {
  overall: 72,
  budgetAdherence: 65,
  savingsRate: 85,
  goalProgress: 68,
  spendingConsistency: 70,
}

export function ProgressTracking() {
  const [selectedPeriod, setSelectedPeriod] = useState("6months")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "over":
        return "text-red-600 bg-red-50 border-red-200"
      case "warning":
        return "text-orange-600 bg-orange-50 border-orange-200"
      case "good":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "over":
        return <AlertTriangle className="h-4 w-4" />
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "good":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Financial Health Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            Financial Health Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray={`${financialHealthScore.overall}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">{financialHealthScore.overall}</span>
                </div>
              </div>
              <p className="text-sm font-medium">Overall Score</p>
              <Badge className="bg-green-100 text-green-700 text-xs">Good</Badge>
            </div>

            {Object.entries(financialHealthScore)
              .slice(1)
              .map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="mb-2">
                    <div className="text-2xl font-bold">{value}</div>
                    <Progress value={value} className="h-2 mt-1" />
                  </div>
                  <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="budget" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="budget">Budget Analysis</TabsTrigger>
          <TabsTrigger value="goals">Goal Progress</TabsTrigger>
          <TabsTrigger value="trends">Spending Trends</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5" />
                  Budget Performance
                </span>
                <div className="flex space-x-2">
                  <Badge className="bg-red-100 text-red-700">4 Over Budget</Badge>
                  <Badge className="bg-orange-100 text-orange-700">2 Warning</Badge>
                  <Badge className="bg-green-100 text-green-700">1 On Track</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {budgetData.categories.map((category) => (
                    <div key={category.name} className={`p-4 rounded-lg border ${getStatusColor(category.status)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {getStatusIcon(category.status)}
                          <span className="ml-2 font-medium">{category.name}</span>
                        </div>
                        <Badge variant="outline" className={`${getStatusColor(category.status)} border-0`}>
                          {category.percentage}%
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>${category.spent.toFixed(2)} spent</span>
                          <span>${category.limit.toFixed(2)} limit</span>
                        </div>
                        <Progress
                          value={Math.min(category.percentage, 100)}
                          className={`h-2 ${category.status === "over" ? "[&>div]:bg-red-500" : category.status === "warning" ? "[&>div]:bg-orange-500" : "[&>div]:bg-green-500"}`}
                        />
                        {category.status === "over" && (
                          <p className="text-xs">${(category.spent - category.limit).toFixed(2)} over budget</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <RechartsPieChart data={spendingByCategory}>
                        {spendingByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPieChart>
                      <Tooltip formatter={(value) => [`$${value}`, "Spent"]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Savings Goals Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goalData.map((goal) => (
                  <div key={goal.name} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium">{goal.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {goal.deadline}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>${goal.current.toLocaleString()}</span>
                        <span>${goal.target.toLocaleString()}</span>
                      </div>
                      <Progress value={goal.percentage} className="h-3" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{goal.percentage}% complete</span>
                        <span>${(goal.target - goal.current).toLocaleString()} to go</span>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-muted rounded text-xs">
                      {goal.percentage >= 80 ? (
                        <span className="text-green-600">🎉 Almost there! Keep it up!</span>
                      ) : goal.percentage >= 50 ? (
                        <span className="text-blue-600">📈 Great progress! You're halfway there!</span>
                      ) : (
                        <span className="text-orange-600">💪 Every dollar counts! Stay consistent!</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Monthly Financial Trends
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant={selectedPeriod === "3months" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod("3months")}
                  >
                    3M
                  </Button>
                  <Button
                    variant={selectedPeriod === "6months" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod("6months")}
                  >
                    6M
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, ""]} />
                    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Income" />
                    <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
                    <Line type="monotone" dataKey="savings" stroke="#3b82f6" strokeWidth={2} name="Savings" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">Avg Monthly Income</span>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-xl font-bold text-green-800">$3,354</p>
                  <p className="text-xs text-green-600">+4.8% vs last period</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-700">Avg Monthly Expenses</span>
                    <TrendingUp className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-xl font-bold text-red-800">$3,115</p>
                  <p className="text-xs text-red-600">+7.8% vs last period</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">Avg Monthly Savings</span>
                    <TrendingDown className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-xl font-bold text-blue-800">$239</p>
                  <p className="text-xs text-blue-600">-15.2% vs last period</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-red-800 flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-red-700">Transportation overspending</p>
                  <p className="text-red-600">$26.75 over budget due to unexpected car maintenance</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-red-700">Entertainment creep</p>
                  <p className="text-red-600">Concert tickets pushed you 32% over budget</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-red-700">Impulse shopping</p>
                  <p className="text-red-600">16% over shopping budget with unplanned purchases</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  What You're Doing Well
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-green-700">Food budget control</p>
                  <p className="text-green-600">Staying 12% under budget with smart meal planning</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-green-700">Consistent saving</p>
                  <p className="text-green-600">Emergency fund growing steadily each month</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-green-700">Goal progress</p>
                  <p className="text-green-600">Vacation fund 66% complete ahead of schedule</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-blue-800 flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Money-Saving Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-blue-700">Subscription audit</p>
                  <p className="text-blue-600">Review Netflix + Spotify for potential savings</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-blue-700">Transportation alternatives</p>
                  <p className="text-blue-600">Consider carpooling to reduce gas costs</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-blue-700">Entertainment alternatives</p>
                  <p className="text-blue-600">Look for free community events this month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-purple-800 flex items-center">
                  <Target className="mr-2 h-4 w-4" />
                  Next Month's Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-purple-700">Build emergency buffer</p>
                  <p className="text-purple-600">Add 10% buffer to transportation budget</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-purple-700">Entertainment planning</p>
                  <p className="text-purple-600">Plan entertainment expenses in advance</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-purple-700">Increase savings rate</p>
                  <p className="text-purple-600">Aim for 15% savings rate next month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
