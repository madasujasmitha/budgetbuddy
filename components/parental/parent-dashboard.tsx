"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, DollarSign, TrendingUp, Users, Settings, Bell } from "lucide-react"

export function ParentDashboard() {
  const [allowanceAmount, setAllowanceAmount] = useState(50)
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, item: "Gaming Headset", amount: 89.99, reason: "For online classes", status: "pending" },
    { id: 2, item: "Concert Tickets", amount: 65.0, reason: "Friend's birthday celebration", status: "pending" },
  ])

  const childrenData = [
    {
      id: 1,
      name: "Jamie",
      age: 16,
      avatar: "/placeholder.svg?height=40&width=40",
      totalSaved: 1250,
      monthlySpending: 180,
      budgetAdherence: 85,
      goalsCompleted: 3,
      level: 12,
      recentActivity: "Completed 'Emergency Fund' goal",
      status: "excellent",
    },
    {
      id: 2,
      name: "Alex",
      age: 14,
      avatar: "/placeholder.svg?height=40&width=40",
      totalSaved: 680,
      monthlySpending: 120,
      budgetAdherence: 72,
      goalsCompleted: 1,
      level: 8,
      recentActivity: "Overspent on entertainment by $25",
      status: "needs-attention",
    },
  ]

  const handleApproval = (id: number, approved: boolean) => {
    setPendingApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: approved ? "approved" : "denied" } : item)),
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Parent Dashboard</h1>
          <p className="text-muted-foreground">Monitor and guide your teen's financial journey</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="allowance">Allowance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6">
            {childrenData.map((child) => (
              <Card key={child.id} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={child.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{child.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{child.name}</CardTitle>
                        <CardDescription>
                          Age {child.age} • Level {child.level}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={child.status === "excellent" ? "default" : "destructive"}>
                      {child.status === "excellent" ? "Excellent" : "Needs Attention"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">${child.totalSaved}</div>
                      <div className="text-sm text-muted-foreground">Total Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">${child.monthlySpending}</div>
                      <div className="text-sm text-muted-foreground">This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{child.budgetAdherence}%</div>
                      <div className="text-sm text-muted-foreground">Budget Adherence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{child.goalsCompleted}</div>
                      <div className="text-sm text-muted-foreground">Goals Completed</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget Adherence</span>
                      <span>{child.budgetAdherence}%</span>
                    </div>
                    <Progress value={child.budgetAdherence} className="h-2" />
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <div className="text-sm font-medium">Recent Activity</div>
                    <div className="text-sm text-muted-foreground">{child.recentActivity}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Pending Approvals
              </CardTitle>
              <CardDescription>Review and approve your teen's larger purchase requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{item.item}</div>
                      <div className="text-sm text-muted-foreground">{item.reason}</div>
                      <div className="text-lg font-bold text-green-600">${item.amount}</div>
                    </div>
                    <div className="flex space-x-2">
                      {item.status === "pending" ? (
                        <>
                          <Button size="sm" variant="outline" onClick={() => handleApproval(item.id, false)}>
                            Deny
                          </Button>
                          <Button size="sm" onClick={() => handleApproval(item.id, true)}>
                            Approve
                          </Button>
                        </>
                      ) : (
                        <Badge variant={item.status === "approved" ? "default" : "destructive"}>{item.status}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allowance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Allowance Management
              </CardTitle>
              <CardDescription>Set up and manage weekly allowances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Weekly Allowance Amount</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold">${allowanceAmount}</span>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Automatic Transfer</span>
                      <Badge variant="default">Enabled</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Next Payment</span>
                      <span className="text-sm text-muted-foreground">Sunday, June 30</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Performance Bonuses</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Budget Goal Met</span>
                        <span className="text-sm font-medium">+$10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Savings Goal Reached</span>
                        <span className="text-sm font-medium">+$15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Educational Quiz Completed</span>
                        <span className="text-sm font-medium">+$5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Family Financial Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Overall Savings Rate</span>
                    <span className="font-bold text-green-600">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Budget Adherence</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Goals Completion Rate</span>
                    <span className="font-bold text-blue-600">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Family Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-900">Summer Vacation Fund</div>
                    <div className="text-sm text-blue-700">Family goal: $2,000</div>
                    <Progress value={65} className="mt-2" />
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-900">No-Spend Weekend</div>
                    <div className="text-sm text-green-700">Challenge completed! 🎉</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
