"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Target, TrendingUp, Trophy } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Sign Up & Set Goals",
      description:
        "Create your account and set your financial goals. Whether it&apos;s saving for a new phone, college, or your first car - we&apos;ll help you get there!",
      icon: Target,
      features: ["Goal setting wizard", "Personalized targets", "Progress tracking"],
    },
    {
      number: 2,
      title: "Track Your Money",
      description:
        "Log your income, expenses, and savings. Our gamified system makes it fun to stay on top of your finances with XP points and achievements.",
      icon: TrendingUp,
      features: ["Easy expense tracking", "Income logging", "Automatic categorization"],
    },
    {
      number: 3,
      title: "Learn & Grow",
      description:
        "Complete financial quests, learn money skills, and unlock achievements. Build real-world financial knowledge through interactive challenges.",
      icon: CheckCircle,
      features: ["Interactive lessons", "Skill challenges", "Knowledge quests"],
    },
    {
      number: 4,
      title: "Level Up Your Life",
      description:
        "Watch your financial confidence grow as you level up, earn rewards, and achieve your goals. Become the financial hero of your own story!",
      icon: Trophy,
      features: ["Level progression", "Achievement system", "Reward unlocks"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge variant="secondary">How It Works</Badge>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Financial Adventure
            <span className="text-primary"> Starts Here</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            BudgetBuddy transforms boring budgeting into an exciting journey. Here&apos;s how we make financial literacy
            fun and engaging for teens.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={step.number} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="rounded-full bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 mb-4">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Step ${step.number}`}
                      alt={`Step ${step.number} illustration`}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Flow */}
        <Card className="border-2 border-accent/20 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">The BudgetBuddy Experience</CardTitle>
            <CardDescription>See how everything connects to create your personalized financial journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=120&width=120&text=Setup"
                    alt="Account setup"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Quick Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Get started in under 5 minutes with our guided setup process
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=120&width=120&text=Track"
                    alt="Money tracking"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Daily Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Log expenses and income with our simple, gamified interface
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=120&width=120&text=Learn"
                    alt="Learning modules"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Complete quests and challenges to build financial knowledge
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=120&width=120&text=Achieve"
                    alt="Achievement unlocked"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Achieve Goals</h3>
                <p className="text-sm text-muted-foreground">Celebrate milestones and unlock rewards as you progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="border-2 border-primary/20 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Why Teens Love BudgetBuddy</CardTitle>
            <CardDescription>Real benefits that make a difference in your financial future</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=150&width=200&text=Fun Learning"
                    alt="Gamified learning experience"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Makes Learning Fun</h3>
                <p className="text-sm text-muted-foreground">
                  Turn financial education into an engaging game with levels, achievements, and rewards
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green/10 to-blue/10 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=150&width=200&text=Real Skills"
                    alt="Building real financial skills"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Builds Real Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Develop practical money management skills that will serve you for life
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple/10 to-pink/10 rounded-lg p-6 mb-4">
                  <img
                    src="/placeholder.svg?height=150&width=200&text=Confidence"
                    alt="Building financial confidence"
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">Builds Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  Gain confidence in making financial decisions and planning for your future
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of teens who are already building better financial habits with BudgetBuddy. Your future
                self will thank you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/learn-more">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
