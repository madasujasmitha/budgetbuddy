"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Newspaper,
  TrendingUp,
  Lightbulb,
  Trophy,
  AlertTriangle,
  Heart,
  Clock,
  ExternalLink,
  BookOpen,
  DollarSign,
  Target,
  Users,
} from "lucide-react"

interface NewsItem {
  id: string
  type: "tip" | "news" | "achievement" | "alert" | "educational"
  title: string
  content: string
  timestamp: string
  priority: "high" | "medium" | "low"
  category: string
  actionable?: boolean
  link?: string
  icon: any
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    type: "alert",
    title: "Transportation Budget Alert",
    content:
      "You've exceeded your transportation budget by $26.75 this month. Consider carpooling or using public transit to get back on track.",
    timestamp: "2 hours ago",
    priority: "high",
    category: "Budget Alert",
    actionable: true,
    icon: AlertTriangle,
  },
  {
    id: "2",
    type: "achievement",
    title: "Savings Streak Achievement Unlocked!",
    content:
      "Congratulations! You've saved money for 15 consecutive days. Keep it up to unlock the 30-day streak badge!",
    timestamp: "5 hours ago",
    priority: "medium",
    category: "Achievement",
    icon: Trophy,
  },
  {
    id: "3",
    type: "tip",
    title: "Smart Shopping Tip",
    content:
      "Before making your next purchase, try the 24-hour rule. Wait a day before buying non-essentials to avoid impulse spending.",
    timestamp: "1 day ago",
    priority: "medium",
    category: "Money Tips",
    actionable: true,
    icon: Lightbulb,
  },
  {
    id: "4",
    type: "news",
    title: "Teen Financial Literacy on the Rise",
    content:
      "New study shows 73% of teens are actively learning about personal finance, up 15% from last year. You're part of a growing movement!",
    timestamp: "1 day ago",
    priority: "low",
    category: "Financial News",
    link: "https://example.com/teen-finance-study",
    icon: TrendingUp,
  },
  {
    id: "5",
    type: "educational",
    title: "Understanding Compound Interest",
    content:
      "Did you know? If you save $50/month starting at 16 with 7% annual return, you'll have over $175,000 by retirement!",
    timestamp: "2 days ago",
    priority: "medium",
    category: "Education",
    actionable: true,
    icon: BookOpen,
  },
  {
    id: "6",
    type: "tip",
    title: "Meal Planning Success",
    content:
      "You're 12% under your food budget! Your meal planning is paying off. Consider using the savings toward your vacation fund.",
    timestamp: "2 days ago",
    priority: "medium",
    category: "Budget Success",
    icon: Heart,
  },
  {
    id: "7",
    type: "alert",
    title: "Entertainment Spending Warning",
    content:
      "You're at 93% of your entertainment budget with a week left in the month. Consider free activities for the rest of the month.",
    timestamp: "3 days ago",
    priority: "medium",
    category: "Budget Warning",
    actionable: true,
    icon: AlertTriangle,
  },
  {
    id: "8",
    type: "educational",
    title: "Emergency Fund Importance",
    content:
      "Financial experts recommend 3-6 months of expenses in emergency savings. You're 47% there with your emergency fund!",
    timestamp: "3 days ago",
    priority: "low",
    category: "Education",
    icon: BookOpen,
  },
  {
    id: "9",
    type: "news",
    title: "Summer Job Market Outlook",
    content:
      "Summer job opportunities for teens increased 12% this year. Popular roles include retail, food service, and tutoring.",
    timestamp: "4 days ago",
    priority: "low",
    category: "Job Market",
    link: "https://example.com/summer-jobs",
    icon: TrendingUp,
  },
  {
    id: "10",
    type: "achievement",
    title: "Quiz Master Progress",
    content:
      "You've completed 4 out of 5 financial literacy quizzes with 80%+ scores. One more to unlock the Quiz Master achievement!",
    timestamp: "5 days ago",
    priority: "medium",
    category: "Achievement",
    actionable: true,
    icon: Trophy,
  },
]

const personalizedTips = [
  {
    title: "Your Transportation Spending Pattern",
    content:
      "You typically spend more on transportation in the first half of the month. Consider budgeting $50 extra for unexpected car expenses.",
    category: "Spending Pattern",
  },
  {
    title: "Goal Achievement Prediction",
    content:
      "At your current savings rate, you'll reach your vacation fund goal 2 weeks ahead of schedule! Consider setting a stretch goal.",
    category: "Goal Progress",
  },
  {
    title: "Subscription Optimization",
    content:
      "You're paying for Netflix ($24.99) and Spotify ($12.99). Consider family plans or student discounts to save $15/month.",
    category: "Cost Optimization",
  },
]

const marketUpdates = [
  {
    title: "Teen Savings Account Rates",
    content:
      "High-yield savings accounts for teens now offer up to 4.5% APY. Consider moving your emergency fund for better returns.",
    impact: "positive",
  },
  {
    title: "Student Loan Interest Rates",
    content:
      "Federal student loan rates for 2024-25 set at 5.50% for undergraduates. Start planning early for college costs.",
    impact: "neutral",
  },
  {
    title: "Minimum Wage Updates",
    content:
      "Several states increased minimum wage for 2024. Check if your part-time job wage aligns with local requirements.",
    impact: "positive",
  },
]

export function FinancialNewsFeed() {
  const [filter, setFilter] = useState("all")
  const [unreadCount, setUnreadCount] = useState(3)

  const filteredNews = newsItems.filter((item) => {
    if (filter === "all") return true
    return item.type === filter
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-200 bg-red-50"
      case "medium":
        return "border-blue-200 bg-blue-50"
      case "low":
        return "border-gray-200 bg-gray-50"
      default:
        return "border-gray-200"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "alert":
        return "bg-red-100 text-red-700"
      case "achievement":
        return "bg-yellow-100 text-yellow-700"
      case "tip":
        return "bg-blue-100 text-blue-700"
      case "news":
        return "bg-green-100 text-green-700"
      case "educational":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* News Feed Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Newspaper className="mr-2 h-5 w-5" />
              Your Financial News Feed
            </span>
            {unreadCount > 0 && <Badge className="bg-red-100 text-red-700">{unreadCount} new</Badge>}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="alert">Alerts</TabsTrigger>
              <TabsTrigger value="tip">Tips</TabsTrigger>
              <TabsTrigger value="achievement">Achievements</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="educational">Learn</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-4">
              <div className="space-y-4">
                {filteredNews.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Card key={item.id} className={`border-l-4 ${getPriorityColor(item.priority)}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <Badge variant="outline" className={`text-xs ${getTypeColor(item.type)} border-0`}>
                                  {item.category}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {item.timestamp}
                                </div>
                                <div className="flex space-x-2">
                                  {item.actionable && (
                                    <Button size="sm" variant="outline" className="text-xs">
                                      Take Action
                                    </Button>
                                  )}
                                  {item.link && (
                                    <Button size="sm" variant="outline" className="text-xs">
                                      <ExternalLink className="h-3 w-3 mr-1" />
                                      Read More
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Personalized Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Personalized Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personalizedTips.map((tip, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="font-medium mb-2">{tip.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{tip.content}</p>
                <Badge variant="outline" className="text-xs">
                  {tip.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Market Updates for Teens
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketUpdates.map((update, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div
                  className={`p-2 rounded-full ${
                    update.impact === "positive"
                      ? "bg-green-100"
                      : update.impact === "negative"
                        ? "bg-red-100"
                        : "bg-blue-100"
                  }`}
                >
                  <DollarSign
                    className={`h-4 w-4 ${
                      update.impact === "positive"
                        ? "text-green-600"
                        : update.impact === "negative"
                          ? "text-red-600"
                          : "text-blue-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{update.title}</h4>
                  <p className="text-sm text-muted-foreground">{update.content}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <span className="font-medium">Review Budget</span>
              <span className="text-xs text-muted-foreground">4 categories over limit</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="font-medium">Complete Quiz</span>
              <span className="text-xs text-muted-foreground">1 more for achievement</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Target className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Update Goals</span>
              <span className="text-xs text-muted-foreground">Vacation fund ahead</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <BookOpen className="h-6 w-6 text-purple-500" />
              <span className="font-medium">Learn More</span>
              <span className="text-xs text-muted-foreground">Compound interest</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
