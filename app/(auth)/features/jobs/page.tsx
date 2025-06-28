import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Briefcase, MapPin, DollarSign, Clock, Users, Zap } from "lucide-react"

export default function JobsFeaturePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Job Quests</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find teen-friendly job opportunities that match your skills, interests, and savings goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 flex items-center justify-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Teen-friendly job board showing various opportunities"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Jobs That Match Your Goals</h2>
            <p className="text-muted-foreground mb-4">
              Our smart matching system connects you with jobs that help you reach your savings goals faster. Whether
              you want to buy new sneakers or save for college, we'll show you exactly how many hours you need to work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Local and remote opportunities</span>
              </li>
              <li className="flex items-center">
                <DollarSign className="h-5 w-5 text-primary mr-2" />
                <span>Goal-based earning calculations</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>Flexible scheduling for students</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Teen-Friendly Jobs</h3>
              <p className="text-sm text-muted-foreground">
                Curated opportunities perfect for students, from dog walking to social media management.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Skill Building</h3>
              <p className="text-sm text-muted-foreground">
                Every job helps you build valuable skills and earn XP that unlocks new opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Instant Matching</h3>
              <p className="text-sm text-muted-foreground">
                See exactly how each job helps you reach your goals with our smart matching algorithm.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Job?</h2>
          <p className="text-muted-foreground mb-6">
            Start earning money while building skills and working towards your financial goals.
          </p>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              Explore Job Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
