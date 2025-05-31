"use client"

import { Progress } from "@/components/ui/progress"
import { BackButton } from "@/components/ui/back-button"

import { useState } from "react"
import {
  Briefcase,
  Search,
  MapPin,
  Filter,
  Clock,
  Star,
  Target,
  ChevronRight,
  Sparkles,
  CalendarClock,
  Bookmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Sample jobs data
const jobs = [
  {
    id: 1,
    title: "Dog Walker",
    employer: "Neighborhood Pets",
    pay: "$15/hr",
    location: "2 miles away",
    difficulty: "Easy",
    time: "2-3 hrs",
    xp: 75,
    matchesGoal: "Nike Air Jordans",
    matchScore: 85,
    description:
      "Walk dogs in your neighborhood. Flexible schedule, perfect for after school. Responsible teens needed who love animals.",
    requirements: ["Must be 14+", "Comfortable with dogs", "Reliable"],
    skills: ["Animal care", "Responsibility", "Time management"],
    type: "In-person",
    category: "Service",
    commitment: "Flexible",
    saved: false,
  },
  {
    id: 2,
    title: "Lawn Mowing",
    employer: "Green Yards",
    pay: "$25/job",
    location: "0.5 miles away",
    difficulty: "Medium",
    time: "1-2 hrs",
    xp: 100,
    matchesGoal: "Nike Air Jordans",
    matchScore: 95,
    description:
      "Mow lawns in your neighborhood. Bring your own equipment or use homeowner's. Great weekend opportunity.",
    requirements: ["Must be 14+", "Physical stamina", "Reliable"],
    skills: ["Yard work", "Equipment operation", "Customer service"],
    type: "In-person",
    category: "Service",
    commitment: "Weekend",
    saved: true,
  },
  {
    id: 3,
    title: "Junior Web Designer",
    employer: "Digital Creations",
    pay: "$18/hr",
    location: "Remote",
    difficulty: "Hard",
    time: "5-10 hrs",
    xp: 150,
    matchesGoal: "Gaming Console",
    matchScore: 75,
    description:
      "Help design simple websites for small businesses. Learn while you earn! Training provided for motivated teens.",
    requirements: ["Must be 15+", "Basic computer skills", "Creative mindset"],
    skills: ["HTML/CSS", "Design", "Problem-solving"],
    type: "Remote",
    category: "Digital",
    commitment: "Part-time",
    saved: false,
  },
  {
    id: 4,
    title: "Babysitting",
    employer: "Family Services",
    pay: "$12/hr",
    location: "1 mile away",
    difficulty: "Medium",
    time: "3-4 hrs",
    xp: 80,
    matchesGoal: "Concert Tickets",
    matchScore: 90,
    description:
      "Watch children after school or on weekends. Experience preferred but not required. Training available.",
    requirements: ["Must be 14+", "Patient", "Responsible"],
    skills: ["Childcare", "First aid", "Communication"],
    type: "In-person",
    category: "Service",
    commitment: "Flexible",
    saved: false,
  },
  {
    id: 5,
    title: "Social Media Helper",
    employer: "Local Shops",
    pay: "$15/hr",
    location: "Remote",
    difficulty: "Easy",
    time: "2-5 hrs",
    xp: 90,
    matchesGoal: "Gaming Console",
    matchScore: 65,
    description:
      "Help local businesses with their social media posts. Create content, schedule posts, and engage with followers.",
    requirements: ["Must be 13+", "Social media savvy", "Creative"],
    skills: ["Content creation", "Social media", "Marketing"],
    type: "Remote",
    category: "Digital",
    commitment: "Flexible",
    saved: true,
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [distanceRange, setDistanceRange] = useState([5])
  const [activeTab, setActiveTab] = useState("all")
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null)
  const [isJobDetailOpen, setIsJobDetailOpen] = useState(false)

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    // Search query
    if (
      searchQuery &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.employer.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Location filter
    if (locationFilter === "remote" && job.type !== "Remote") return false
    if (locationFilter === "local" && job.type !== "In-person") return false

    // Type filter
    if (typeFilter !== "all" && job.category.toLowerCase() !== typeFilter.toLowerCase()) return false

    // Tab filter
    if (activeTab === "saved" && !job.saved) return false
    if (activeTab === "matched" && !job.matchesGoal) return false

    return true
  })

  const handleJobClick = (job: (typeof jobs)[0]) => {
    setSelectedJob(job)
    setIsJobDetailOpen(true)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Job Quest Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Filter className="mr-2 h-5 w-5 text-primary" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="remote">Remote only</SelectItem>
                    <SelectItem value="local">Local only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Distance</label>
                  <span className="text-sm text-muted-foreground">{distanceRange[0]} miles</span>
                </div>
                <Slider
                  defaultValue={[5]}
                  max={10}
                  step={1}
                  value={distanceRange}
                  onValueChange={setDistanceRange}
                  className="[&>span]:bg-primary"
                />
              </div>

              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Goal Match
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 p-3">
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm font-medium">Nike Air Jordans</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">$65 more needed</p>
                <Progress
                  value={56}
                  className="h-2 mt-2 bg-white/50 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
                />
              </div>

              <div className="mt-4 text-sm">
                <p className="font-medium">Jobs that match your goal:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Lawn Mowing</span>
                    <Badge className="bg-secondary">3 jobs</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Dog Walking</span>
                    <Badge className="bg-secondary">5 hours</Badge>
                  </li>
                </ul>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Sparkles className="mr-2 h-4 w-4" />
                Find Goal Matches
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="matched">Goal Matched</TabsTrigger>
              <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-muted/20 rounded-lg border-2 border-dashed border-muted">
              <Briefcase className="h-12 w-12 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No jobs found</h3>
              <p className="mt-1 text-muted-foreground">Try adjusting your filters or search query</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setLocationFilter("all")
                  setTypeFilter("all")
                  setActiveTab("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className={`border-2 ${
                    job.matchesGoal === "Nike Air Jordans" ? "border-primary/20" : "border-muted"
                  } overflow-hidden cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => handleJobClick(job)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                            job.type === "Remote"
                              ? "bg-gradient-to-br from-purple-400 to-purple-500"
                              : "bg-gradient-to-br from-secondary to-secondary/80"
                          }`}
                        >
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold">{job.title}</h3>
                            {job.saved && <Bookmark className="ml-2 h-4 w-4 text-primary fill-primary" />}
                          </div>
                          <p className="text-sm text-muted-foreground">{job.employer}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className={`${
                                job.type === "Remote"
                                  ? "border-purple-200 bg-purple-50 text-purple-700"
                                  : "border-secondary/20 bg-secondary/10 text-secondary-foreground"
                              }`}
                            >
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                              +{job.xp} XP
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="mr-1 h-3 w-3" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end mt-3 md:mt-0">
                        <span className="font-bold text-lg text-secondary">{job.pay}</span>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="mr-1 h-3 w-3" />
                          {job.time}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Star className="mr-1 h-3 w-3" />
                          {job.difficulty} difficulty
                        </div>
                      </div>
                    </div>

                    {job.matchesGoal && (
                      <div className="mt-3 bg-primary/10 rounded-lg p-2">
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center">
                            <Target className="h-3 w-3 mr-1 text-primary" />
                            <span className="font-medium">Goal match: {job.matchesGoal}</span>
                          </div>
                          <span className="font-bold">{job.matchScore}%</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/50">
                          <div className="h-full bg-primary" style={{ width: `${job.matchScore}%` }} />
                        </div>
                        <p className="text-xs mt-1">
                          {job.title === "Lawn Mowing"
                            ? "Just 3 jobs will complete your goal!"
                            : job.title === "Dog Walker"
                              ? "About 5 hours will complete your goal!"
                              : "This job will help you reach your goal."}
                        </p>
                      </div>
                    )}

                    <div className="mt-3 flex justify-end">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Detail Dialog */}
      <Dialog open={isJobDetailOpen} onOpenChange={setIsJobDetailOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedJob && (
            <div className="space-y-4 mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-muted-foreground">{selectedJob.employer}</p>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{selectedJob.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-secondary">{selectedJob.pay}</p>
                  <Badge className="mt-1 bg-primary/20 text-primary">+{selectedJob.xp} XP</Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-muted p-2">
                  <Clock className="h-4 w-4 mx-auto mb-1" />
                  <p className="text-xs font-medium">{selectedJob.time}</p>
                  <p className="text-xs text-muted-foreground">Time</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <Star className="h-4 w-4 mx-auto mb-1" />
                  <p className="text-xs font-medium">{selectedJob.difficulty}</p>
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <CalendarClock className="h-4 w-4 mx-auto mb-1" />
                  <p className="text-xs font-medium">{selectedJob.commitment}</p>
                  <p className="text-xs text-muted-foreground">Commitment</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Description</h3>
                <p className="text-sm">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Requirements</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-1">Skills You'll Gain</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-secondary/10 text-secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedJob.matchesGoal && (
                <div className="rounded-lg bg-primary/10 p-3">
                  <h3 className="font-medium flex items-center">
                    <Target className="h-4 w-4 mr-1 text-primary" />
                    Goal Impact
                  </h3>
                  <p className="text-sm mt-1">
                    This job will help you reach your "{selectedJob.matchesGoal}" goal faster! With just{" "}
                    {selectedJob.title === "Lawn Mowing"
                      ? "3 jobs"
                      : selectedJob.title === "Dog Walker"
                        ? "5 hours"
                        : "a few shifts"}
                    , you could complete your goal.
                  </p>
                </div>
              )}

              <div className="flex space-x-3 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save Job
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
