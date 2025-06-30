"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, ChevronRight, Zap, Code, Camera, Palette, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SkillTree() {
  const skills = [
    {
      id: 1,
      name: "Digital Design",
      level: 3,
      maxLevel: 5,
      icon: Palette,
      earnings: "$15-25/hr",
      jobs: ["Logo Designer", "Social Media Graphics"],
      progress: 65,
    },
    {
      id: 2,
      name: "Coding",
      level: 2,
      maxLevel: 5,
      icon: Code,
      earnings: "$18-30/hr",
      jobs: ["Web Developer", "App Builder"],
      progress: 40,
    },
    {
      id: 3,
      name: "Photography",
      level: 4,
      maxLevel: 5,
      icon: Camera,
      earnings: "$20-40/job",
      jobs: ["Event Photographer", "Product Photos"],
      progress: 80,
    },
  ]

  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Rocket className="mr-2 h-5 w-5 text-primary" />
            <CardTitle>Skill Tree</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.id} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="rounded-full bg-primary/20 p-2 mr-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{skill.name}</h3>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: skill.maxLevel }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full mr-1 ${i < skill.level ? "bg-primary" : "bg-primary/20"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">Level {skill.level}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-secondary">{skill.earnings}</Badge>
              </div>

              <div className="mt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Skill Progress</span>
                  <span className="font-medium">{skill.progress}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full bg-primary" style={{ width: `${skill.progress}%` }} />
                </div>
              </div>

              <div className="mt-3">
                <span className="text-xs font-medium">Unlocked Jobs:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {skill.jobs.map((job, index) => (
                    <Badge key={index} variant="outline" className="bg-accent/10 text-accent-foreground">
                      {job}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="ghost" size="sm" className="mt-2 h-7 w-full text-xs">
                Level Up This Skill
                <Zap className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-muted p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Music className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium">New Skill Available: Music Production</span>
            </div>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
              Unlock
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Create beats and songs to sell online. Earn $20-50 per track!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
