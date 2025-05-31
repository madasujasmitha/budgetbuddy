"use client"

import { useState } from "react"
import {
  Lightbulb,
  TrendingUp,
  DollarSign,
  Calculator,
  PiggyBank,
  GraduationCap,
  Home,
  Car,
  Briefcase,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BackButton } from "@/components/ui/back-button"

export default function FuturePage() {
  const [savingsAmount, setSavingsAmount] = useState([20])
  const [timeframe, setTimeframe] = useState("college")
  const [currentSavings, setCurrentSavings] = useState("187")
  const [activeTab, setActiveTab] = useState("savings")

  // Calculate future values based on inputs
  const weeklyAmount = savingsAmount[0]
  const monthlyAmount = weeklyAmount * 4
  const yearlyAmount = monthlyAmount * 12

  const oneYearSavings = Number.parseInt(currentSavings) + yearlyAmount
  const highSchoolSavings = Number.parseInt(currentSavings) + yearlyAmount * 4 // 4 years of high school
  const collegeSavings = highSchoolSavings + yearlyAmount * 4 // 4 more years of college

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Future Impact</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Current Savings</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    className="pl-7"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Weekly Savings</Label>
                  <span className="text-sm font-medium">${savingsAmount[0]}/week</span>
                </div>
                <Slider
                  defaultValue={[20]}
                  min={5}
                  max={50}
                  step={5}
                  value={savingsAmount}
                  onValueChange={setSavingsAmount}
                  className="[&>span]:bg-primary"
                />
              </div>

              <div className="space-y-2">
                <Label>Timeframe</Label>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="year">1 Year</SelectItem>
                    <SelectItem value="highschool">High School Graduation</SelectItem>
                    <SelectItem value="college">College Graduation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
                <h3 className="text-sm font-bold">Your Future Savings</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly:</span>
                    <span className="font-bold">${monthlyAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Yearly:</span>
                    <span className="font-bold">${yearlyAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      {timeframe === "year"
                        ? "In 1 year:"
                        : timeframe === "highschool"
                          ? "By high school graduation:"
                          : "By college graduation:"}
                    </span>
                    <span className="font-bold">
                      $
                      {timeframe === "year"
                        ? oneYearSavings
                        : timeframe === "highschool"
                          ? highSchoolSavings
                          : collegeSavings}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                <Sparkles className="mr-2 h-4 w-4" />
                Calculate My Future
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                Money Wisdom
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <p className="text-sm italic">
                  "The best time to start saving was yesterday. The second best time is today."
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-start">
                  <div className="rounded-full bg-secondary/20 p-1 mr-2">
                    <Lightbulb className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    Saving just $20/week through high school can give you over $4,000 for college expenses.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-secondary/20 p-1 mr-2">
                    <Lightbulb className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    Money saved in your teens is worth more than money saved later because of compound interest.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-secondary/20 p-1 mr-2">
                    <Lightbulb className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    Learning to save now creates habits that will benefit you for your entire life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Your Money Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h3 className="font-bold text-sm mb-4">Your Savings Journey</h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">Now</span>
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-bold mt-1">${currentSavings}</span>
                  </div>

                  <TrendingUp className="h-4 w-4 text-secondary mx-2" />

                  <div className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">1 Year</span>
                    <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                      <DollarSign className="h-8 w-8 text-secondary" />
                    </div>
                    <span className="font-bold mt-1">${oneYearSavings}</span>
                  </div>

                  <TrendingUp className="h-4 w-4 text-secondary mx-2" />

                  <div className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">High School</span>
                    <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                      <DollarSign className="h-8 w-8 text-accent" />
                    </div>
                    <span className="font-bold mt-1">${highSchoolSavings}</span>
                  </div>

                  <TrendingUp className="h-4 w-4 text-accent mx-2" />

                  <div className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">College</span>
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-bold mt-1">${collegeSavings}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  If you save ${weeklyAmount}/week through high school, you could have ${highSchoolSavings} for college
                  expenses!
                </p>
              </div>

              <div className="mt-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="savings" className="flex items-center">
                      <PiggyBank className="mr-2 h-4 w-4" />
                      Savings
                    </TabsTrigger>
                    <TabsTrigger value="education" className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Education
                    </TabsTrigger>
                    <TabsTrigger value="biggoals" className="flex items-center">
                      <Home className="mr-2 h-4 w-4" />
                      Big Goals
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="savings" className="mt-4 space-y-4">
                    <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
                      <h3 className="font-bold text-sm">Power Up Your Future</h3>
                      <p className="text-sm mt-1">
                        Increasing your savings by just $5/week could add $1,300 to your college fund!
                      </p>

                      <div className="mt-2 flex justify-between">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          Future Impact: High
                        </Badge>
                        <Badge className="bg-primary">+75 XP</Badge>
                      </div>

                      <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
                        Boost Your Future
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <h3 className="font-medium text-sm">Compound Interest</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          If you invest your savings with a 5% return, your college fund could grow to $
                          {Math.round(collegeSavings * 1.05 * 1.05 * 1.05 * 1.05)}!
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2 h-7 w-full text-xs">
                          Learn About Investing
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <h3 className="font-medium text-sm">Emergency Fund</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Having $500 saved for emergencies can prevent debt and financial stress.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2 h-7 w-full text-xs">
                          Start Emergency Fund
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-4 space-y-4">
                    <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
                      <h3 className="font-bold text-sm flex items-center">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        College Expenses
                      </h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Books & Supplies:</span>
                          <span className="font-bold">$1,200/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Housing:</span>
                          <span className="font-bold">$10,000/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Food:</span>
                          <span className="font-bold">$3,000/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Transportation:</span>
                          <span className="font-bold">$1,500/year</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Your projected savings of ${collegeSavings} could cover{" "}
                        {Math.round((collegeSavings / 15700) * 100)}% of your first year expenses!
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <h3 className="font-medium text-sm">Scholarships</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Applying for scholarships now can significantly reduce your college costs.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2 h-7 w-full text-xs">
                          Explore Scholarships
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <h3 className="font-medium text-sm">Student Loans</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Every $1,000 you save now is about $1,500 less in student loan debt later.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-2 h-7 w-full text-xs">
                          Learn About Loans
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="biggoals" className="mt-4 space-y-4">
                    <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
                      <h3 className="font-bold text-sm">Long-Term Impact</h3>
                      <p className="text-sm mt-1">
                        The money habits you build now will impact your ability to achieve big goals like buying a car,
                        a home, or starting a business.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <div className="flex flex-col items-center">
                          <Car className="h-8 w-8 text-primary mb-2" />
                          <h3 className="font-medium text-sm">First Car</h3>
                          <p className="text-xs text-muted-foreground mt-1 text-center">
                            Save $3,000 for a down payment on your first car.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <div className="flex flex-col items-center">
                          <Home className="h-8 w-8 text-secondary mb-2" />
                          <h3 className="font-medium text-sm">Future Home</h3>
                          <p className="text-xs text-muted-foreground mt-1 text-center">
                            Start saving now for a home down payment in your 20s.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <div className="flex flex-col items-center">
                          <Briefcase className="h-8 w-8 text-accent mb-2" />
                          <h3 className="font-medium text-sm">Business Startup</h3>
                          <p className="text-xs text-muted-foreground mt-1 text-center">
                            Save $5,000 to launch your first business venture.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
