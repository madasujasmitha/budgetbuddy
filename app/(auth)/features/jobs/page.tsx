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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
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
