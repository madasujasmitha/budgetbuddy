"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, ExternalLink, Star, MapPin, DollarSign, Clock, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Dog Walker",
    pay: "$15/hr",
    location: "2 miles away",
    difficulty: "Easy",
    time: "2-3 hrs",
    xp: 75,
    matchesGoal: "Nike Air Jordans",
    matchScore: 85,
  },
  {
    id: 2,
    title: "Lawn Mowing",
    pay: "$25/job",
    location: "0.5 miles away",
    difficulty: "Medium",
    time: "1-2 hrs",
    xp: 100,
    matchesGoal: "Nike Air Jordans",
    matchScore: 95,
  },
  {
    id: 3,
    title: "Junior Web Designer",
    pay: "$18/hr",
    location: "Remote",
    difficulty: "Hard",
    time: "5-10 hrs",
    xp: 150,
    matchesGoal: "Gaming Console",
    matchScore: 75,
  },
]

export function JobQuests() {
  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <CardTitle className="text-base">Job Quests</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="goal-matched">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="goal-matched" className="flex-1">
              Goal Matched
            </TabsTrigger>
            <TabsTrigger value="all-jobs" className="flex-1">
              All Jobs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="goal-matched">
            <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3 mb-3">
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Jobs to help you get Nike Air Jordans faster!</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                You need $65 more. These jobs can help you reach your goal!
              </p>
            </div>

            <div className="space-y-3">
              {jobs
                .filter((job) => job.matchesGoal === "Nike Air Jordans")
                .map((job) => (
                  <div key={job.id} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <div className="flex justify-between">
                      <h3 className="font-bold">{job.title}</h3>
                      <Badge className="bg-secondary">{job.pay}</Badge>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {job.time}
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3" />
                        {job.difficulty}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="mr-1 h-3 w-3" />+{job.xp} XP
                      </div>
                    </div>

                    <div className="mt-2 bg-secondary/20 rounded-lg p-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium">Goal match:</span>
                        <span className="font-bold">{job.matchScore}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/50">
                        <div className="h-full bg-secondary" style={{ width: `${job.matchScore}%` }} />
                      </div>
                      <p className="text-xs mt-1">
                        {job.title === "Lawn Mowing"
                          ? "Just 3 jobs will complete your goal!"
                          : job.title === "Dog Walker"
                            ? "About 5 hours will complete your goal!"
                            : "This job will help you reach your goal."}
                      </p>
                    </div>

                    <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
                      View Quest
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="all-jobs">
            <div className="space-y-3">
              {jobs.map((job) => (
                <div key={job.id} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{job.title}</h3>
                    <Badge className="bg-secondary">{job.pay}</Badge>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {job.time}
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-3 w-3" />
                      {job.difficulty}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-3 w-3" />+{job.xp} XP
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
                    View Quest
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Button variant="secondary" size="sm" className="w-full text-xs mt-3">
          Discover More Quests
        </Button>
      </CardContent>
    </Card>
  )
}
