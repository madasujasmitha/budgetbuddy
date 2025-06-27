"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Globe,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  ShoppingCart,
  Briefcase,
  Home,
  Fuel,
  Gamepad2,
  BookOpen,
  Award,
} from "lucide-react"

export function GlobalEconomicsExplorer() {
  const [selectedCountry, setSelectedCountry] = useState("USA")
  const [userLevel, setUserLevel] = useState(3)
  const [economicsXP, setEconomicsXP] = useState(750)

  const economicIndicators = [
    {
      name: "Inflation Rate",
      value: "3.2%",
      trend: "up",
      impact: "Your money buys less stuff over time",
      teenExample: "That $5 coffee might cost $5.16 next year",
      icon: TrendingUp,
      color: "text-red-600",
    },
    {
      name: "Interest Rates",
      value: "5.25%",
      trend: "stable",
      impact: "Higher returns on savings, but loans cost more",
      teenExample: "Your savings account earns more, but car loans are pricier",
      icon: DollarSign,
      color: "text-blue-600",
    },
    {
      name: "Unemployment",
      value: "3.8%",
      trend: "down",
      impact: "More job opportunities available",
      teenExample: "Easier to find part-time jobs and internships",
      icon: Briefcase,
      color: "text-green-600",
    },
    {
      name: "GDP Growth",
      value: "2.1%",
      trend: "up",
      impact: "Economy is growing steadily",
      teenExample: "More businesses opening = more job opportunities",
      icon: Building,
      color: "text-purple-600",
    },
  ]

  const personalImpacts = [
    {
      category: "Housing",
      impact: "Rent prices up 8% this year",
      advice: "Start saving for housing costs early - they're rising fast!",
      icon: Home,
      severity: "high",
    },
    {
      category: "Transportation",
      impact: "Gas prices fluctuating with global events",
      advice: "Consider public transport or biking to save money",
      icon: Fuel,
      severity: "medium",
    },
    {
      category: "Food",
      impact: "Grocery costs up 4% due to supply chain issues",
      advice: "Learn to cook at home - it's cheaper and healthier!",
      icon: ShoppingCart,
      severity: "medium",
    },
    {
      category: "Education",
      impact: "College costs rising faster than inflation",
      advice: "Start saving now and look into scholarships",
      icon: BookOpen,
      severity: "high",
    },
  ]

  const economicsGames = [
    {
      name: "Inflation Island",
      description: "Manage a virtual economy and see how inflation affects prices",
      difficulty: "Beginner",
      xpReward: 100,
      completed: true,
    },
    {
      name: "Interest Rate Adventure",
      description: "Navigate different interest rate scenarios",
      difficulty: "Intermediate",
      xpReward: 150,
      completed: false,
    },
    {
      name: "Global Trade Tycoon",
      description: "Learn how international trade affects local prices",
      difficulty: "Advanced",
      xpReward: 200,
      completed: false,
    },
    {
      name: "Budget City Builder",
      description: "Build a city while managing economic factors",
      difficulty: "Expert",
      xpReward: 300,
      completed: false,
    },
  ]

  const countries = [
    { code: "USA", name: "United States", inflation: 3.2, growth: 2.1 },
    { code: "CAN", name: "Canada", inflation: 2.8, growth: 1.8 },
    { code: "UK", name: "United Kingdom", inflation: 4.1, growth: 0.9 },
    { code: "JPN", name: "Japan", inflation: 1.2, growth: 1.5 },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return TrendingUp
      case "down":
        return TrendingDown
      default:
        return DollarSign
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-200 bg-red-50"
      case "medium":
        return "border-yellow-200 bg-yellow-50"
      default:
        return "border-green-200 bg-green-50"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Globe className="mr-3 h-8 w-8 text-blue-600" />
            Global Economics Explorer
          </h1>
          <p className="text-muted-foreground">Learn how the world economy affects your wallet - SimCity style!</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Level {userLevel}</Badge>
          <Badge variant="default">{economicsXP} XP</Badge>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Economics Mastery Progress</span>
            <span className="text-sm text-muted-foreground">{economicsXP}/1000 XP to Level 4</span>
          </div>
          <Progress value={75} className="h-2" />
        </CardContent>
      </Card>

      <Tabs defaultValue="indicators" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="indicators">Economic Indicators</TabsTrigger>
          <TabsTrigger value="impact">Personal Impact</TabsTrigger>
          <TabsTrigger value="games">Economics Games</TabsTrigger>
          <TabsTrigger value="global">Global Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="indicators" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {economicIndicators.map((indicator, index) => {
              const TrendIcon = getTrendIcon(indicator.trend)
              const IndicatorIcon = indicator.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <IndicatorIcon className={`mr-2 h-5 w-5 ${indicator.color}`} />
                        {indicator.name}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        <span className={`text-xl font-bold ${indicator.color}`}>{indicator.value}</span>
                        <TrendIcon className={`h-4 w-4 ${indicator.color}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900 mb-1">What this means:</div>
                        <div className="text-sm text-blue-800">{indicator.impact}</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-green-900 mb-1">Real example:</div>
                        <div className="text-sm text-green-800">{indicator.teenExample}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid gap-4">
            {personalImpacts.map((impact, index) => {
              const IconComponent = impact.icon
              return (
                <Card key={index} className={getSeverityColor(impact.severity)}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-white rounded-lg">
                        <IconComponent className="h-5 w-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{impact.category}</h3>
                          <Badge variant={impact.severity === "high" ? "destructive" : "secondary"}>
                            {impact.severity} impact
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{impact.impact}</p>
                        <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                          <div className="text-sm font-medium text-blue-900">💡 Smart Move:</div>
                          <div className="text-sm text-blue-800">{impact.advice}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">🎯 Your Action Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-purple-700">
                <div>
                  • <strong>Short-term:</strong> Track how economic changes affect your spending
                </div>
                <div>
                  • <strong>Medium-term:</strong> Adjust your budget for rising costs
                </div>
                <div>
                  • <strong>Long-term:</strong> Start investing to beat inflation
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="space-y-6">
          <div className="grid gap-4">
            {economicsGames.map((game, index) => (
              <Card key={index} className={game.completed ? "border-green-200 bg-green-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${game.completed ? "bg-green-100" : "bg-blue-100"}`}>
                        <Gamepad2 className={`h-5 w-5 ${game.completed ? "text-green-600" : "text-blue-600"}`} />
                      </div>
                      <div>
                        <h3 className="font-medium">{game.name}</h3>
                        <p className="text-sm text-muted-foreground">{game.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{game.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground">+{game.xpReward} XP</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {game.completed ? (
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-green-600" />
                          <Badge variant="default">Completed</Badge>
                        </div>
                      ) : (
                        <Button>Play Now</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">🎮 Why Economics Games?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <div className="font-medium mb-2">Learn by Doing</div>
                  <ul className="space-y-1">
                    <li>• See cause and effect in real-time</li>
                    <li>• Make mistakes without real consequences</li>
                    <li>• Build intuition for complex concepts</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-2">Gamified Learning</div>
                  <ul className="space-y-1">
                    <li>• Earn XP and unlock achievements</li>
                    <li>• Progress through difficulty levels</li>
                    <li>• Compete with friends</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="global" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Economic Comparison</CardTitle>
              <CardDescription>See how different countries are doing economically</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  {countries.map((country) => (
                    <Button
                      key={country.code}
                      variant={selectedCountry === country.code ? "default" : "outline"}
                      onClick={() => setSelectedCountry(country.code)}
                    >
                      {country.code}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {countries.map((country) => (
                    <Card key={country.code} className={selectedCountry === country.code ? "border-blue-500" : ""}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{country.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Inflation Rate</span>
                            <span className="font-medium">{country.inflation}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">GDP Growth</span>
                            <span className="font-medium">{country.growth}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What This Means for You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="text-sm font-medium text-yellow-900 mb-1">🌍 Global Connections</div>
                  <div className="text-sm text-yellow-800">
                    When other countries struggle economically, it can affect prices and job opportunities in your area
                    too.
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-900 mb-1">💰 Investment Opportunities</div>
                  <div className="text-sm text-green-800">
                    Understanding global economics helps you make smarter investment decisions when you're older.
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-900 mb-1">🎓 Career Planning</div>
                  <div className="text-sm text-blue-800">
                    Some careers are more affected by global economics than others - good to know for your future!
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
