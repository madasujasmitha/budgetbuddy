"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"
import { FinancialQuiz } from "@/components/education/financial-quiz"
import { AchievementSystem } from "@/components/achievements/achievement-system"
import { CompetitionLeaderboard } from "@/components/social/competition-leaderboard"
import { FinancialCalculators } from "@/components/calculators/financial-calculators"
import { Brain, Trophy, Users, Calculator, BookOpen, Target, Star, Zap, Award, TrendingUp } from "lucide-react"

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("quiz")
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true)
    // Here you would typically update the user's progress and achievements
    console.log(`Quiz completed with score: ${score}/${total}`)
  }

  const educationStats = {
    quizzesCompleted: 3,
    averageScore: 85,
    achievementsUnlocked: 12,
    calculatorsUsed: 4,
    competitionRank: 2,
    totalXP: 1450,
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Financial Education Hub</h1>
        <p className="text-muted-foreground">
          Level up your financial knowledge through quizzes, achievements, competitions, and practical tools!
        </p>
      </div>

      {/* Education Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <Brain className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{educationStats.quizzesCompleted}</p>
            <p className="text-xs text-muted-foreground">Quizzes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{educationStats.averageScore}%</p>
            <p className="text-xs text-muted-foreground">Avg Score</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{educationStats.achievementsUnlocked}</p>
            <p className="text-xs text-muted-foreground">Achievements</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calculator className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{educationStats.calculatorsUsed}</p>
            <p className="text-xs text-muted-foreground">Calculators</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">#{educationStats.competitionRank}</p>
            <p className="text-xs text-muted-foreground">Rank</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{educationStats.totalXP}</p>
            <p className="text-xs text-muted-foreground">Total XP</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Education Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="quiz" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Quiz
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="competition" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Competition
          </TabsTrigger>
          <TabsTrigger value="calculators" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculators
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quiz" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Brain className="mr-2 h-5 w-5" />
                  Financial Literacy Quiz
                </div>
                <Badge className="bg-blue-100 text-blue-700">Test Your Knowledge</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Test your financial knowledge with our interactive quiz! Each quiz covers different topics and
                  difficulty levels to help you learn progressively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <p className="font-medium text-blue-800">5 Questions</p>
                    <p className="text-xs text-blue-600">Mixed difficulty</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <Zap className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <p className="font-medium text-green-800">Earn XP</p>
                    <p className="text-xs text-green-600">50-200 XP based on score</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg text-center">
                    <Award className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                    <p className="font-medium text-purple-800">Unlock Achievements</p>
                    <p className="text-xs text-purple-600">Quiz Master badge available</p>
                  </div>
                </div>
              </div>
              <FinancialQuiz onComplete={handleQuizComplete} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <AchievementSystem />
        </TabsContent>

        <TabsContent value="competition" className="space-y-6">
          <CompetitionLeaderboard />
        </TabsContent>

        <TabsContent value="calculators" className="space-y-6">
          <FinancialCalculators />
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Continue Your Learning Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={() => setActiveTab("quiz")}
            >
              <Brain className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Take Another Quiz</span>
              <span className="text-xs text-muted-foreground">Earn more XP</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={() => setActiveTab("calculators")}
            >
              <Calculator className="h-6 w-6 text-purple-500" />
              <span className="font-medium">Use Calculators</span>
              <span className="text-xs text-muted-foreground">Plan your finances</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={() => setActiveTab("competition")}
            >
              <Users className="h-6 w-6 text-orange-500" />
              <span className="font-medium">Join Competition</span>
              <span className="text-xs text-muted-foreground">Challenge friends</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={() => setActiveTab("achievements")}
            >
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="font-medium">View Achievements</span>
              <span className="text-xs text-muted-foreground">Track progress</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
