import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us revolutionize financial education for teens.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              At BudgetBuddy, we're on a mission to make financial education fun and accessible for teens. We're looking
              for passionate individuals who want to make a difference in how the next generation thinks about money.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-bold mb-2">Meaningful Impact</h3>
                <p className="text-sm text-muted-foreground">Help shape the financial future of the next generation.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Innovation-First Culture</h3>
                <p className="text-sm text-muted-foreground">
                  We're always experimenting with new ways to make learning fun.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Develop your skills in a fast-growing startup environment.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Open Positions</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Game Designer</h3>
                <p className="text-muted-foreground mb-4">
                  Design engaging game mechanics that make financial education fun and rewarding.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Full-time • Remote</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Financial Education Specialist</h3>
                <p className="text-muted-foreground mb-4">
                  Develop educational content that teaches teens about money management, saving, and investing.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Full-time • Remote</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Frontend Developer</h3>
                <p className="text-muted-foreground mb-4">
                  Build engaging user interfaces that make financial education accessible and fun.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Full-time • Remote</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits your skills?</p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              Send Us Your Resume
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
