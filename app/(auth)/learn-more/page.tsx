import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, DollarSign, Target, Briefcase, Rocket, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LearnMorePage() {
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
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About BudgetBuddy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about how BudgetBuddy helps teens master money management.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Financial Education, Gamified</h2>
              <p className="text-muted-foreground mb-4">
                BudgetBuddy transforms financial education from boring lectures into an exciting adventure. By combining
                game mechanics with solid financial principles, we've created a platform that makes managing money feel
                like a game.
              </p>
              <p className="text-muted-foreground">
                Earn XP, level up, unlock achievements, and watch your financial skills grow along with your savings.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 aspect-video flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="App dashboard visualization"
                className="rounded-lg shadow-sm w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Goal Setting & Tracking</h3>
                    <p className="text-muted-foreground">
                      Set savings goals for things you want and track your progress with visual rewards. Each goal
                      becomes a quest with milestones and achievements.
                    </p>
                    <Link href="/features/goals">
                      <Button variant="link" className="px-0 mt-2">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <Briefcase className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Job Discovery</h3>
                    <p className="text-muted-foreground">
                      Find teen-friendly job opportunities that match your skills and interests. From babysitting to
                      lawn mowing to digital design, discover ways to earn.
                    </p>
                    <Link href="/features/jobs">
                      <Button variant="link" className="px-0 mt-2">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <Rocket className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Skill Building</h3>
                    <p className="text-muted-foreground">
                      Level up skills that help you earn more and unlock new job opportunities. Each skill level
                      increases your earning potential.
                    </p>
                    <Link href="/features/skills">
                      <Button variant="link" className="px-0 mt-2">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Money Journal</h3>
                    <p className="text-muted-foreground">
                      Track your emotional relationship with money and develop healthy financial habits. Understand the
                      emotions behind your spending and saving.
                    </p>
                    <Link href="/features/journal">
                      <Button variant="link" className="px-0 mt-2">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6">Ready to Start Your Financial Adventure?</h2>
            <Link href="/register">
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                size="lg"
              >
                Create Your Account
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
