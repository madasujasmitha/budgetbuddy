"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Recycle,
  Car,
  ShoppingBag,
  Utensils,
  Zap,
  Award,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"

export function EcoSpendingTracker() {
  const [carbonFootprint, setCarbonFootprint] = useState(2.4) // kg CO2 this month
  const [ecoScore, setEcoScore] = useState(78)

  const recentPurchases = [
    {
      id: 1,
      item: "Organic Groceries",
      amount: 45.99,
      carbonImpact: -0.2,
      ecoRating: "excellent",
      category: "food",
      suggestion: "Great choice! Organic foods have 30% lower carbon footprint",
    },
    {
      id: 2,
      item: "Fast Fashion T-Shirt",
      amount: 12.99,
      carbonImpact: 2.1,
      ecoRating: "poor",
      category: "clothing",
      suggestion: "Consider thrift stores or sustainable brands next time",
    },
    {
      id: 3,
      item: "Public Transport Pass",
      amount: 25.0,
      carbonImpact: -1.5,
      ecoRating: "excellent",
      category: "transport",
      suggestion: "Amazing! You saved 1.5kg CO2 vs driving",
    },
    {
      id: 4,
      item: "Plastic Water Bottles",
      amount: 8.99,
      carbonImpact: 0.8,
      ecoRating: "poor",
      category: "drinks",
      suggestion: "Try a reusable water bottle - save money and planet!",
    },
  ]

  const ecoAlternatives = [
    {
      category: "Transportation",
      current: "Uber rides",
      alternative: "Public transport + bike sharing",
      savings: "$45/month",
      carbonSaved: "12kg CO2/month",
      icon: Car,
    },
    {
      category: "Food",
      current: "Fast food",
      alternative: "Home cooking with local ingredients",
      savings: "$80/month",
      carbonSaved: "8kg CO2/month",
      icon: Utensils,
    },
    {
      category: "Shopping",
      current: "New clothes",
      alternative: "Thrift stores + clothing swaps",
      savings: "$120/month",
      carbonSaved: "15kg CO2/month",
      icon: ShoppingBag,
    },
    {
      category: "Energy",
      current: "Regular electricity",
      alternative: "Energy-efficient habits",
      savings: "$25/month",
      carbonSaved: "20kg CO2/month",
      icon: Zap,
    },
  ]

  const achievements = [
    { name: "Eco Warrior", description: "Reduced carbon footprint by 20%", earned: true },
    { name: "Green Commuter", description: "Used public transport 15 times", earned: true },
    { name: "Sustainable Shopper", description: "Bought 5 second-hand items", earned: false },
    { name: "Zero Waste Week", description: "No single-use plastics for 7 days", earned: false },
  ]

  const getEcoIcon = (category: string) => {
    switch (category) {
      case "food":
        return Utensils
      case "clothing":
        return ShoppingBag
      case "transport":
        return Car
      case "drinks":
        return Recycle
      default:
        return Leaf
    }
  }

  const getEcoColor = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "text-green-600 bg-green-50"
      case "good":
        return "text-blue-600 bg-blue-50"
      case "fair":
        return "text-yellow-600 bg-yellow-50"
      case "poor":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Leaf className="mr-3 h-8 w-8 text-green-600" />
            Eco-Friendly Spending
          </h1>
          <p className="text-muted-foreground">Track your environmental impact and discover sustainable alternatives</p>
        </div>
        <Badge variant="outline" className="text-green-600 border-green-600">
          Eco Score: {ecoScore}/100
        </Badge>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Carbon Footprint</p>
                <p className="text-2xl font-bold text-orange-600">{carbonFootprint} kg</p>
                <p className="text-xs text-muted-foreground">CO2 this month</p>
              </div>
              <TrendingDown className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Money Saved</p>
                <p className="text-2xl font-bold text-green-600">$127</p>
                <p className="text-xs text-muted-foreground">vs conventional choices</p>
              </div>
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Eco Purchases</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-xs text-muted-foreground">this month</p>
              </div>
              <Recycle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Eco Streak</p>
                <p className="text-2xl font-bold text-purple-600">7</p>
                <p className="text-xs text-muted-foreground">days</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="purchases" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="purchases">Recent Purchases</TabsTrigger>
          <TabsTrigger value="alternatives">Eco Alternatives</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="impact">Impact Report</TabsTrigger>
        </TabsList>

        <TabsContent value="purchases" className="space-y-4">
          {recentPurchases.map((purchase) => {
            const IconComponent = getEcoIcon(purchase.category)
            return (
              <Card key={purchase.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${getEcoColor(purchase.ecoRating)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{purchase.item}</h3>
                          <Badge variant={purchase.ecoRating === "excellent" ? "default" : "destructive"}>
                            {purchase.ecoRating}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{purchase.suggestion}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm font-medium">${purchase.amount}</span>
                          <span
                            className={`text-sm font-medium ${purchase.carbonImpact > 0 ? "text-red-600" : "text-green-600"}`}
                          >
                            {purchase.carbonImpact > 0 ? "+" : ""}
                            {purchase.carbonImpact} kg CO2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="alternatives" className="space-y-4">
          <div className="grid gap-4">
            {ecoAlternatives.map((alt, index) => {
              const IconComponent = alt.icon
              return (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{alt.category}</h3>
                          <p className="text-sm text-muted-foreground">
                            Switch from <span className="font-medium">{alt.current}</span> to{" "}
                            <span className="font-medium text-green-600">{alt.alternative}</span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">{alt.savings}</div>
                        <div className="text-xs text-muted-foreground">{alt.carbonSaved}</div>
                        <Button size="sm" className="mt-2">
                          Try It
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={achievement.earned ? "border-green-200 bg-green-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    {achievement.earned ? (
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    ) : (
                      <div className="h-8 w-8 rounded-full border-2 border-gray-300" />
                    )}
                    <div>
                      <h3 className="font-medium">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Impact</CardTitle>
                <CardDescription>Your environmental contribution this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Carbon Footprint Goal</span>
                      <span className="text-sm">2.4/3.0 kg CO2</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">15</div>
                      <div className="text-xs text-muted-foreground">Trees Equivalent Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">450</div>
                      <div className="text-xs text-muted-foreground">Gallons Water Saved</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eco Tips</CardTitle>
                <CardDescription>Personalized suggestions for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-blue-900">Transportation Tip</div>
                        <div className="text-xs text-blue-700">
                          Try biking to nearby places - you could save $30/month!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Leaf className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-green-900">Shopping Tip</div>
                        <div className="text-xs text-green-700">
                          Check out the local thrift store - unique finds at great prices!
                        </div>
                      </div>
                    </div>
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
