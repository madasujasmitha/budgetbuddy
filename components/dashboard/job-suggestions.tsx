"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, ExternalLink } from "lucide-react"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Dog Walker",
    pay: "$15/hr",
    location: "2 miles away",
  },
  {
    id: 2,
    title: "Lawn Mowing",
    pay: "$25/job",
    location: "0.5 miles away",
  },
  {
    id: 3,
    title: "Junior Web Designer",
    pay: "$18/hr",
    location: "Remote",
  },
]

export function JobSuggestions() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5 text-teal-500" />
          <CardTitle className="text-base">Job Opportunities</CardTitle>
        </div>
        <CardDescription>Earn money to reach your goals faster</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-md border p-3">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">{job.title}</h3>
                <span className="text-sm text-teal-600 font-medium">{job.pay}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
              <Button variant="link" size="sm" className="h-6 px-0 text-xs mt-1">
                View details
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full text-xs">
            View all jobs
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
