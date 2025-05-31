"use client"

import { useState } from "react"
import {
  Rocket,
  Code,
  Camera,
  Palette,
  Music,
  Video,
  Megaphone,
  Briefcase,
  ChevronRight,
  Star,
  DollarSign,
  Clock,
  Zap,
  Plus,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackButton } from "@/components/ui/back-button"

// Sample skills data
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
    description: "Create digital art, logos, and graphics for businesses and social media.",
    nextLevel: "Learn advanced Photoshop techniques",
    xpToNext: 250,
    currentXp: 162,
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
    description: "Build websites and simple applications using HTML, CSS, and JavaScript.",
    nextLevel: "Learn a JavaScript framework",
    xpToNext: 300,
    currentXp: 120,
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
    description: "Take professional-quality photos for events, products, and portraits.",
    nextLevel: "Master advanced lighting techniques",
    xpToNext: 200,
    currentXp: 160,
  },
  {
    id: 4,
    name: "Music Production",
    level: 1,
    maxLevel: 5,
    icon: Music,
    earnings: "$20-50/track",
    jobs: ["Beat Maker", "Jingle Creator"],
    progress: 20,
    description: "Create beats, songs, and jingles using digital audio workstations.",
    nextLevel: "Learn music theory fundamentals",
    xpToNext: 150,
    currentXp: 30,
  },
  {
    id: 5,
    name: "Video Editing",
    level: 2,
    maxLevel: 5,
    icon: Video,
    earnings: "$15-30/hr",
    jobs: ["YouTube Editor", "Short Video Creator"],
    progress: 45,
    description: "Edit videos for social media, YouTube, and small businesses.",
    nextLevel: "Master transitions and effects",
    xpToNext: 200,
    currentXp: 90,
  },
  {
    id: 6,
    name: "Marketing",
    level: 1,
    maxLevel: 5,
    icon: Megaphone,
    earnings: "$15-25/hr",
    jobs: ["Social Media Manager", "Content Creator"],
    progress: 15,
    description: "Help businesses promote their products and services online.",
    nextLevel: "Learn social media strategy",
    xpToNext: 150,
    currentXp: 22,
  },
]

// Sample related jobs
const relatedJobs = [
  {
    id: 1,
    title: "Logo Design for Local Cafe",
    skill: "Digital Design",
    pay: "$50",
    time: "One-time project",
    difficulty: "Medium",
    deadline: "Flexible",
  },
  {
    id: 2,
    title: "Social Media Graphics",
    skill: "Digital Design",
    pay: "$15/hr",
    time: "5 hours/week",
    difficulty: "Easy",
    deadline: "Ongoing",
  },
  {
    id: 3,
    title: "Simple Website Creation",
    skill: "Coding",
    pay: "$100",
    time: "One-time project",
    difficulty: "Medium",
    deadline: "2 weeks",
  },
]

// Sample learning resources
const learningResources = [
  {
    id: 1,
    title: "Intro to Digital Design",
    skill: "Digital Design",
    platform: "YouTube",
    duration: "2 hours",
    difficulty: "Beginner",
    free: true,
  },
  {
    id: 2,
    title: "Photoshop Essentials",
    skill: "Digital Design",
    platform: "Udemy",
    duration: "4 hours",
    difficulty: "Beginner",
    free: false,
    cost: "$12.99",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    skill: "Coding",
    platform: "freeCodeCamp",
    duration: "20 hours",
    difficulty: "Beginner-Intermediate",
    free: true,
  },
]

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null)
  const [isSkillDetailOpen, setIsSkillDetailOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("jobs")

  const handleSkillClick = (skill: (typeof skills)[0]) => {
    setSelectedSkill(skill)
    setIsSkillDetailOpen(true)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold">Skill Tree</h1>
        <Button className="mt-2 md:mt-0 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
          <Plus className="mr-2 h-4 w-4" />
          Discover New Skills
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="border-2 border-primary/20 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleSkillClick(skill)}
          >
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="rounded-full bg-primary/20 p-2 mr-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{skill.name}</CardTitle>
                </div>
                <Badge className="bg-secondary">{skill.earnings}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center mt-1">
                {Array.from({ length: skill.maxLevel }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full mr-1 ${i < skill.level ? "bg-primary" : "bg-primary/20"}`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">Level {skill.level}</span>
              </div>

              <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{skill.description}</p>

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

              <Button variant="ghost" size="sm" className="mt-3 h-7 w-full text-xs">
                Level Up This Skill
                <Zap className="ml-1 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skill Detail Dialog */}
      <Dialog open={isSkillDetailOpen} onOpenChange={setIsSkillDetailOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedSkill && (
                <>
                  <selectedSkill.icon className="mr-2 h-5 w-5 text-primary" />
                  {selectedSkill.name} - Level {selectedSkill.level}
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedSkill && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center">
                {Array.from({ length: selectedSkill.maxLevel }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 w-6 ${
                      i < selectedSkill.level ? "bg-primary" : "bg-primary/20"
                    } ${i === 0 ? "rounded-l-full" : ""} ${
                      i === selectedSkill.maxLevel - 1 ? "rounded-r-full" : ""
                    } relative`}
                  >
                    {i < selectedSkill.level && i + 1 === selectedSkill.level && (
                      <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                        {selectedSkill.level}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p>{selectedSkill.description}</p>

              <div className="rounded-lg bg-primary/10 p-3">
                <h3 className="font-medium flex items-center">
                  <Zap className="h-4 w-4 mr-1 text-primary" />
                  Next Level: {selectedSkill.level + 1}
                </h3>
                <p className="text-sm mt-1">{selectedSkill.nextLevel}</p>
                <div className="mt-2">
                  <div className="flex justify-between text-xs">
                    <span>XP Progress</span>
                    <span>
                      {selectedSkill.currentXp}/{selectedSkill.xpToNext} XP
                    </span>
                  </div>
                  <Progress
                    value={(selectedSkill.currentXp / selectedSkill.xpToNext) * 100}
                    className="h-2 mt-1 bg-white/50 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
                  />
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="jobs" className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Related Jobs
                  </TabsTrigger>
                  <TabsTrigger value="learning" className="flex items-center">
                    <Rocket className="mr-2 h-4 w-4" />
                    Learning Resources
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="jobs" className="mt-4 space-y-3">
                  {relatedJobs
                    .filter((job) => job.skill === selectedSkill.name)
                    .map((job) => (
                      <div key={job.id} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{job.title}</h3>
                          <Badge className="bg-secondary">{job.pay}</Badge>
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {job.time}
                          </div>
                          <div className="flex items-center">
                            <Star className="mr-1 h-3 w-3" />
                            {job.difficulty}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
                          View Job
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    ))}

                  {relatedJobs.filter((job) => job.skill === selectedSkill.name).length === 0 && (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No related jobs found</p>
                      <Button variant="outline" className="mt-2">
                        Browse All Jobs
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="learning" className="mt-4 space-y-3">
                  {learningResources
                    .filter((resource) => resource.skill === selectedSkill.name)
                    .map((resource) => (
                      <div key={resource.id} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{resource.title}</h3>
                          <Badge className={resource.free ? "bg-green-500" : "bg-accent"}>
                            {resource.free ? "Free" : resource.cost}
                          </Badge>
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {resource.duration}
                          </div>
                          <div className="flex items-center">
                            <Star className="mr-1 h-3 w-3" />
                            {resource.difficulty}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="mt-2 h-7 w-full text-xs">
                          Start Learning
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    ))}

                  {learningResources.filter((resource) => resource.skill === selectedSkill.name).length === 0 && (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No learning resources found</p>
                      <Button variant="outline" className="mt-2">
                        Browse All Resources
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              <div className="flex space-x-3 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Level Up ({selectedSkill.currentXp}/{selectedSkill.xpToNext} XP)
                </Button>
                <Button variant="outline" className="flex-1">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Find Related Jobs
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
