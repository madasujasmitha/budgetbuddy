"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Crown, Users, Target, Plus, Zap, Star } from "lucide-react"

interface Participant {
  id: string
  name: string
  avatar: string
  relationship: "friend" | "parent" | "sibling" | "self"
  level: number
  xp: number
  totalSavings: number
  goalsCompleted: number
  quizzesCompleted: number
  streakDays: number
  achievements: number
}

interface Challenge {
  id: string
  name: string
  description: string
  type: "savings" | "quiz" | "streak" | "goals"
  duration: number
  startDate: string
  endDate: string
  participants: string[]
  prize: string
  status: "active" | "completed" | "upcoming"
}

const participants: Participant[] = [
  {
    id: "user",
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    relationship: "self",
    level: 7,
    xp: 2450,
    totalSavings: 387,
    goalsCompleted: 5,
    quizzesCompleted: 8,
    streakDays: 15,
    achievements: 12,
  },
  {
    id: "mom",
    name: "Mom",
    avatar: "/placeholder.svg?height=40&width=40",
    relationship: "parent",
    level: 12,
    xp: 4200,
    totalSavings: 1250,
    goalsCompleted: 12,
    quizzesCompleted: 15,
    streakDays: 45,
    achievements: 28,
  },
  {
    id: "alex",
    name: "Alex",
    avatar: "/placeholder.svg?height=40&width=40",
    relationship: "friend",
    level: 6,
    xp: 2100,
    totalSavings: 290,
    goalsCompleted: 4,
    quizzesCompleted: 6,
    streakDays: 8,
    achievements: 9,
  },
  {
    id: "sarah",
    name: "Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    relationship: "friend",
    level: 8,
    xp: 2800,
    totalSavings: 445,
    goalsCompleted: 7,
    quizzesCompleted: 12,
    streakDays: 22,
    achievements: 15,
  },
  {
    id: "dad",
    name: "Dad",
    avatar: "/placeholder.svg?height=40&width=40",
    relationship: "parent",
    level: 10,
    xp: 3600,
    totalSavings: 980,
    goalsCompleted: 8,
    quizzesCompleted: 10,
    streakDays: 30,
    achievements: 22,
  },
]

const challenges: Challenge[] = [
  {
    id: "savings_sprint",
    name: "30-Day Savings Sprint",
    description: "Save at least $5 every day for 30 days",
    type: "savings",
    duration: 30,
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    participants: ["user", "alex", "sarah"],
    prize: "Winner gets $25 bonus + Special Badge",
    status: "active",
  },
  {
    id: "quiz_master",
    name: "Quiz Master Challenge",
    description: "Complete 5 financial literacy quizzes with 80%+ score",
    type: "quiz",
    duration: 14,
    startDate: "2024-01-15",
    endDate: "2024-01-29",
    participants: ["user", "mom", "dad", "sarah"],
    prize: "Educational Achievement Badge + XP Boost",
    status: "active",
  },
  {
    id: "family_goals",
    name: "Family Goal Challenge",
    description: "Each family member completes 2 financial goals",
    type: "goals",
    duration: 60,
    startDate: "2024-01-01",
    endDate: "2024-03-01",
    participants: ["user", "mom", "dad"],
    prize: "Family Dinner + $50 for each participant",
    status: "upcoming",
  },
]

export function CompetitionLeaderboard() {
  const [activeTab, setActiveTab] = useState("overall")
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)

  const getLeaderboardData = (metric: keyof Participant) => {
    return [...participants].sort((a, b) => {
      const aValue = typeof a[metric] === "number" ? (a[metric] as number) : 0
      const bValue = typeof b[metric] === "number" ? (b[metric] as number) : 0
      return bValue - aValue
    })
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getRelationshipBadge = (relationship: string) => {
    const colors = {
      self: "bg-primary text-white",
      parent: "bg-blue-100 text-blue-700",
      friend: "bg-green-100 text-green-700",
      sibling: "bg-purple-100 text-purple-700",
    }
    return colors[relationship as keyof typeof colors] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{participants.length}</p>
                <p className="text-sm text-muted-foreground">Active Competitors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{challenges.filter((c) => c.status === "active").length}</p>
                <p className="text-sm text-muted-foreground">Active Challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">#{getLeaderboardData("xp").findIndex((p) => p.id === "user") + 1}</p>
                <p className="text-sm text-muted-foreground">Your Overall Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Trophy className="mr-2 h-5 w-5" />
              Competition Leaderboards
            </div>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Invite Friends
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overall">Overall XP</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="streaks">Streaks</TabsTrigger>
            </TabsList>

            <TabsContent value="overall" className="space-y-3">
              {getLeaderboardData("xp").map((participant, index) => (
                <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{participant.name}</span>
                        <Badge className={`text-xs ${getRelationshipBadge(participant.relationship)}`}>
                          {participant.relationship}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Level {participant.level}</span>
                        <span>{participant.xp} XP</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-bold">{participant.xp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="savings" className="space-y-3">
              {getLeaderboardData("totalSavings").map((participant, index) => (
                <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium">{participant.name}</span>
                      <div className="text-sm text-muted-foreground">Total Savings</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">${participant.totalSavings}</div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="goals" className="space-y-3">
              {getLeaderboardData("goalsCompleted").map((participant, index) => (
                <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium">{participant.name}</span>
                      <div className="text-sm text-muted-foreground">Goals Completed</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{participant.goalsCompleted}</div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="quizzes" className="space-y-3">
              {getLeaderboardData("quizzesCompleted").map((participant, index) => (
                <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium">{participant.name}</span>
                      <div className="text-sm text-muted-foreground">Quizzes Completed</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">{participant.quizzesCompleted}</div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="streaks" className="space-y-3">
              {getLeaderboardData("streakDays").map((participant, index) => (
                <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(index + 1)}</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{participant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium">{participant.name}</span>
                      <div className="text-sm text-muted-foreground">Current Streak</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span className="font-bold text-orange-600">{participant.streakDays} days</span>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Active Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challenges
              .filter((c) => c.status === "active")
              .map((challenge) => (
                <div key={challenge.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{challenge.name}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">{challenge.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-medium">{challenge.duration} days</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Participants</p>
                      <p className="font-medium">{challenge.participants.length} people</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Prize</p>
                    <p className="text-sm font-medium text-primary">{challenge.prize}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {challenge.participants.slice(0, 3).map((participantId) => {
                        const participant = participants.find((p) => p.id === participantId)
                        return participant ? (
                          <Avatar key={participantId} className="h-6 w-6 border-2 border-white">
                            <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">{participant.name[0]}</AvatarFallback>
                          </Avatar>
                        ) : null
                      })}
                      {challenge.participants.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted border-2 border-white flex items-center justify-center">
                          <span className="text-xs">+{challenge.participants.length - 3}</span>
                        </div>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
