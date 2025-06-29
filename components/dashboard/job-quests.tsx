"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight } from "lucide-react"

export function JobQuests() {
  const jobQuests = [
    {
      id: 1,
      title: "Dog Walker",
      company: "Neighborhood",
      location: "Local Area",
      pay: "$15/hour",
      difficulty: "Easy",
      timeCommitment: "2-3 hours",
      skills: ["Responsibility", "Animal Care"],
      description: "Walk dogs for busy neighbors",
      available: true,
    },
    {
      id: 2,
      title: "Lawn Mowing",
      company: "Various Homes",
      location: "Your Street",
      pay: "$25/lawn",
      difficulty: "Medium",
      timeCommitment: "1-2 hours",
      skills: ["Physical Work", "Equipment Use"],
      description: "Mow lawns for elderly neighbors",
      available: true,
    },
    {
      id: 3,
      title: "Tutoring Helper",
      company: "Local Library",
      location: "Downtown Library",
      pay: "$12/hour",
      difficulty: "Medium",
      timeCommitment: "3-4 hours",
      skills: ["Teaching", "Patience", "Math"],
      description: "Help younger kids with homework",
      available: false,
      requirement: "Need Math Skill Level 3",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-primary" />
            Job Quests
            <Badge variant="secondary" className="ml-2">
              {jobQuests.filter((j) => j.available).length} Available
            </Badge>
          </CardTitle>
          <Button variant="outline" size="sm">
            Browse All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {jobQuests.map((job) => (
            <div
              key={job.id}
              className={`p-3 rounded-lg border transition-colors ${
                job.available
                  ? "border-green-200 bg-green-50 hover:bg-green-100 cursor-pointer"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-sm">{job.title}</h4>
                    <Badge className={getDifficultyColor(job.difficulty)}>{job.difficulty}</Badge>
                    {!job.available && (
                      <Badge variant="outline" className="text-xs">
                        Locked
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{job.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.pay}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.timeCommitment}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground mb-1">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {!job.available && job.requirement && (
                    <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-xs text-yellow-800">{job.requirement}</p>
                    </div>
                  )}
                </div>
              </div>

              {job.available && (
                <div className="mt-3 pt-2 border-t border-green-200">
                  <Button size="sm" className="w-full">
                    Apply for Quest
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Complete quests to earn money and XP!</p>
            <Button variant="outline" size="sm">
              View Job Board
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
