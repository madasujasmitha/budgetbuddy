"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wifi, WifiOff, Upload, Smartphone, AlertCircle, CheckCircle, Clock, Database } from "lucide-react"

export function OfflineMode() {
  const [isOnline, setIsOnline] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [pendingSync, setPendingSync] = useState(3)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const offlineTransactions = [
    { id: 1, item: "Coffee", amount: 4.5, category: "Food", timestamp: "2 hours ago", synced: false },
    { id: 2, item: "Bus Fare", amount: 2.25, category: "Transport", timestamp: "3 hours ago", synced: false },
    { id: 3, item: "Lunch", amount: 12.99, category: "Food", timestamp: "5 hours ago", synced: true },
  ]

  const smsTips = [
    {
      trigger: "Overspending",
      message: "💰 BudgetBuddy Alert: You've spent $45 of your $50 weekly food budget. Consider cooking at home today!",
      frequency: "Real-time",
    },
    {
      trigger: "Goal Progress",
      message: "🎯 Great job! You're 75% towards your $500 emergency fund goal. Keep it up!",
      frequency: "Weekly",
    },
    {
      trigger: "Savings Tip",
      message: "💡 Tip: Pack lunch 3x this week to save $30. That's $120/month towards your vacation fund!",
      frequency: "Daily",
    },
    {
      trigger: "Achievement",
      message: "🏆 Congratulations! You've completed your 'No Impulse Buying' challenge. Reward unlocked!",
      frequency: "As earned",
    },
  ]

  const offlineFeatures = [
    {
      name: "Transaction Entry",
      description: "Add expenses and income without internet",
      status: "available",
      icon: Database,
    },
    {
      name: "Budget Tracking",
      description: "View current budget status offline",
      status: "available",
      icon: CheckCircle,
    },
    {
      name: "Goal Progress",
      description: "Check savings goals progress",
      status: "available",
      icon: CheckCircle,
    },
    {
      name: "Educational Content",
      description: "Access downloaded financial tips",
      status: "limited",
      icon: AlertCircle,
    },
    {
      name: "AI Coach",
      description: "Get personalized advice",
      status: "unavailable",
      icon: WifiOff,
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            {isOnline ? (
              <Wifi className="mr-3 h-8 w-8 text-green-600" />
            ) : (
              <WifiOff className="mr-3 h-8 w-8 text-red-600" />
            )}
            Offline Mode & SMS Tips
          </h1>
          <p className="text-muted-foreground">Stay connected to your finances, even without internet</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={isOnline ? "default" : "destructive"}>{isOnline ? "Online" : "Offline"}</Badge>
          {pendingSync > 0 && <Badge variant="outline">{pendingSync} pending sync</Badge>}
        </div>
      </div>

      <Tabs defaultValue="offline" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="offline">Offline Features</TabsTrigger>
          <TabsTrigger value="sms">SMS Setup</TabsTrigger>
          <TabsTrigger value="sync">Data Sync</TabsTrigger>
          <TabsTrigger value="tips">SMS Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="offline" className="space-y-6">
          <div className="grid gap-4">
            {offlineFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          feature.status === "available"
                            ? "bg-green-50"
                            : feature.status === "limited"
                              ? "bg-yellow-50"
                              : "bg-red-50"
                        }`}
                      >
                        <feature.icon
                          className={`h-5 w-5 ${
                            feature.status === "available"
                              ? "text-green-600"
                              : feature.status === "limited"
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.name}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        feature.status === "available"
                          ? "default"
                          : feature.status === "limited"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!isOnline && (
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Offline Mode Active
                </CardTitle>
                <CardDescription className="text-yellow-700">
                  You can still track expenses and view your budget. Data will sync when you're back online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Add Offline Transaction</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="sms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5" />
                SMS Notifications Setup
              </CardTitle>
              <CardDescription>
                Get financial tips and alerts via text message, perfect for limited data plans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">SMS Notifications</div>
                  <div className="text-sm text-muted-foreground">
                    Receive budget alerts, tips, and goal updates via text
                  </div>
                </div>
                <Button variant={smsEnabled ? "default" : "outline"} onClick={() => setSmsEnabled(!smsEnabled)}>
                  {smsEnabled ? "Enabled" : "Enable"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Message Frequency</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Daily tips</option>
                    <option>Weekly summary</option>
                    <option>Alerts only</option>
                    <option>Custom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Morning (8-10 AM)</option>
                    <option>Afternoon (12-2 PM)</option>
                    <option>Evening (6-8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-900 mb-2">💡 Why SMS Tips?</div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Works with any phone, no smartphone required</li>
                  <li>• Uses minimal data - perfect for limited plans</li>
                  <li>• Instant alerts for budget overruns</li>
                  <li>• Daily motivation and financial education</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sync" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Data Synchronization
              </CardTitle>
              <CardDescription>Manage offline data and sync when connected</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Auto-Sync</div>
                    <div className="text-sm text-muted-foreground">Automatically sync when internet is available</div>
                  </div>
                  <Badge variant="default">Enabled</Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Pending Transactions</h4>
                  {offlineTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{transaction.item}</div>
                        <div className="text-sm text-muted-foreground">
                          ${transaction.amount} • {transaction.category} • {transaction.timestamp}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {transaction.synced ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        )}
                        <Badge variant={transaction.synced ? "default" : "secondary"}>
                          {transaction.synced ? "Synced" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {pendingSync > 0 && (
                  <Button className="w-full" disabled={!isOnline}>
                    <Upload className="mr-2 h-4 w-4" />
                    Sync {pendingSync} Transactions
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <div className="grid gap-4">
            {smsTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{tip.trigger}</h3>
                      <Badge variant="outline">{tip.frequency}</Badge>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-mono">{tip.message}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">SMS Tips Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                <div>
                  <div className="font-medium mb-2">📱 Accessibility</div>
                  <ul className="space-y-1">
                    <li>• Works on any phone</li>
                    <li>• No app required</li>
                    <li>• Minimal data usage</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-2">🎯 Effectiveness</div>
                  <ul className="space-y-1">
                    <li>• 98% open rate for SMS</li>
                    <li>• Instant notifications</li>
                    <li>• Behavioral nudges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
