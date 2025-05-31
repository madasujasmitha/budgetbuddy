"use client"

import { useState } from "react"
import {
  Target,
  Plus,
  Sparkles,
  Rocket,
  Calendar,
  DollarSign,
  Briefcase,
  Award,
  ChevronRight,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BackButton } from "@/components/ui/back-button"
import { GoalSettingTutorial } from "@/components/education/goal-setting-tutorial"

// Sample goals data
const goals = [
  {
    id: 1,
    name: "Nike Air Jordans",
    target: 150,
    current: 85,
    deadline: "July 15, 2024",
    category: "Fashion",
    image: "/placeholder.svg?height=100&width=100",
    priority: "high",
    progress: 56,
  },
  {
    id: 2,
    name: "Gaming Console",
    target: 400,
    current: 120,
    deadline: "December 25, 2024",
    category: "Tech",
    image: "/placeholder.svg?height=100&width=100",
    priority: "medium",
    progress: 30,
  },
  {
    id: 3,
    name: "Concert Tickets",
    target: 75,
    current: 75,
    deadline: "June 10, 2024",
    category: "Entertainment",
    image: "/placeholder.svg?height=100&width=100",
    priority: "completed",
    progress: 100,
  },
]

// Sample quests data
const quests = [
  {
    id: 1,
    name: "No-Spend Challenge",
    description: "Go 3 days without spending any money",
    reward: 50,
    deadline: "May 20, 2024",
    progress: 66,
    type: "saving",
  },
  {
    id: 2,
    name: "Budget Master",
    description: "Track all expenses for 7 days straight",
    reward: 75,
    deadline: "May 25, 2024",
    progress: 42,
    type: "tracking",
  },
  {
    id: 3,
    name: "Income Boost",
    description: "Earn $50 from a new income source",
    reward: 100,
    deadline: "June 5, 2024",
    progress: 20,
    type: "earning",
  },
]

export default function GoalsPage() {
  const [activeTab, setActiveTab] = useState("goals")
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold">Quests & Goals</h1>
        <div className="flex space-x-2 mt-2 md:mt-0">
          <Dialog open={isAddGoalOpen} onOpenChange={setIsAddGoalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Epic Quest</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">What are you saving for?</Label>
                  <Input id="name" placeholder="e.g., New Skateboard" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Target Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input id="amount" type="number" className="pl-7" placeholder="150" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Target Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Image (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <img
                      src="/placeholder.svg?height=80&width=120"
                      alt="Upload goal image"
                      className="mx-auto mb-2 rounded opacity-50"
                    />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  onClick={() => setIsAddGoalOpen(false)}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Create Quest
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Rocket className="mr-2 h-4 w-4" />
            New Challenge
          </Button>
          <Button variant="outline" onClick={() => setShowTutorial(true)}>
            <BookOpen className="mr-2 h-4 w-4" />
            Goal Setting Guide
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="goals" className="flex items-center">
            <Target className="mr-2 h-4 w-4" />
            Savings Goals
          </TabsTrigger>
          <TabsTrigger value="quests" className="flex items-center">
            <Award className="mr-2 h-4 w-4" />
            Money Quests
          </TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal) => (
              <Card
                key={goal.id}
                className={`border-2 ${
                  goal.priority === "high"
                    ? "border-primary/20"
                    : goal.priority === "completed"
                      ? "border-green-200"
                      : "border-muted"
                } overflow-hidden`}
              >
                <div
                  className={`p-4 ${
                    goal.priority === "high"
                      ? "bg-gradient-to-r from-primary/10 to-accent/10"
                      : goal.priority === "completed"
                        ? "bg-green-50"
                        : "bg-muted/50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg mr-3">
                        <img src={goal.image || "/placeholder.svg"} alt={goal.name} className="object-cover" />
                        {goal.priority === "completed" && (
                          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                            <Award className="h-6 w-6 text-green-600" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold">{goal.name}</h3>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{goal.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      className={
                        goal.priority === "high"
                          ? "bg-primary/20 text-primary"
                          : goal.priority === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-muted-foreground/20"
                      }
                    >
                      {goal.priority === "completed" ? "Completed" : goal.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="font-medium">${goal.current}</span>
                        <span className="text-muted-foreground text-sm ml-1">/ ${goal.target}</span>
                      </div>
                      <span className="text-sm font-medium">
                        {goal.priority === "completed" ? "Done!" : `$${goal.target - goal.current} to go`}
                      </span>
                    </div>

                    <div>
                      <Progress
                        value={goal.progress}
                        className={`h-2 ${
                          goal.priority === "completed" ? "bg-green-100" : "bg-muted"
                        } [&>div]:bg-gradient-to-r ${
                          goal.priority === "completed"
                            ? "[&>div]:from-green-400 [&>div]:to-green-500"
                            : "[&>div]:from-primary [&>div]:to-accent"
                        }`}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{goal.progress}% complete</span>
                        {goal.priority !== "completed" && <span>Est. 4 weeks left</span>}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        className={`flex-1 ${
                          goal.priority === "completed"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-primary hover:bg-primary/90"
                        }`}
                        size="sm"
                      >
                        {goal.priority === "completed" ? "View Rewards" : "Add Money"}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        {goal.priority === "completed" ? "Set New Goal" : "Find Jobs"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 border-dashed border-muted">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=80&width=120"
                    alt="Create new goal illustration"
                    className="mx-auto rounded"
                  />
                </div>
                <h3 className="font-medium">Add New Goal</h3>
                <p className="text-sm text-muted-foreground mt-1">Track your progress towards your next purchase</p>
                <Button
                  className="mt-4 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent"
                  onClick={() => setIsAddGoalOpen(true)}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Create New Quest
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quests" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quests.map((quest) => (
              <Card key={quest.id} className="border-2 border-primary/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center">
                      {quest.type === "saving" ? (
                        <DollarSign className="mr-2 h-5 w-5 text-primary" />
                      ) : quest.type === "tracking" ? (
                        <Calendar className="mr-2 h-5 w-5 text-primary" />
                      ) : (
                        <Briefcase className="mr-2 h-5 w-5 text-primary" />
                      )}
                      {quest.name}
                    </CardTitle>
                    <Badge className="bg-primary/20 text-primary">+{quest.reward} XP</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{quest.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{quest.progress}%</span>
                    </div>
                    <Progress
                      value={quest.progress}
                      className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Complete by: {quest.deadline}</span>
                      <span>{quest.type === "tracking" ? `${Math.round((quest.progress / 100) * 7)}/7 days` : ""}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Continue Quest</Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 border-dashed border-muted">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-4 mb-4">
                  <img
                    src="/placeholder.svg?height=80&width=120"
                    alt="Discover new quests illustration"
                    className="mx-auto rounded"
                  />
                </div>
                <h3 className="font-medium">Discover New Quests</h3>
                <p className="text-sm text-muted-foreground mt-1">Complete money challenges to earn XP and rewards</p>
                <Button className="mt-4 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Find Challenges
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <GoalSettingTutorial
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        onComplete={() => {
          // Handle tutorial completion
          console.log("Tutorial completed!")
        }}
      />
    </div>
  )
}
