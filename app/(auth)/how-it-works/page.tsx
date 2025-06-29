import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function HowItWorksPage() {
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
          <h1 className="text-4xl font-bold mb-4">How BudgetBuddy Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to financial mastery is just a few steps away.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                1
              </div>
              <h2 className="text-2xl font-bold mb-4">Create Your Character</h2>
              <p className="text-muted-foreground mb-4">
                Sign up and customize your financial adventurer profile. Choose your avatar, set your financial goals,
                and get ready to start your journey.
              </p>
              <p className="text-muted-foreground">
                Your profile tracks your progress, XP, and achievements as you level up your financial skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Character creation screen with avatar selection"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-6 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Goal setting interface with progress tracking"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                2
              </div>
              <h2 className="text-2xl font-bold mb-4">Set Your First Quest</h2>
              <p className="text-muted-foreground mb-4">
                Choose something you want to save for and create a goal. Whether it&apos;s a new pair of sneakers,
                concert tickets, or saving for college, BudgetBuddy helps you track your progress.
              </p>
              <p className="text-muted-foreground">
                Each goal becomes a quest with milestones, rewards, and a clear path to completion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                3
              </div>
              <h2 className="text-2xl font-bold mb-4">Track Your Adventures</h2>
              <p className="text-muted-foreground mb-4">
                Log your income and expenses to earn XP and level up. Every financial decision becomes part of your
                adventure, with rewards for good habits and insights to help you improve.
              </p>
              <p className="text-muted-foreground">
                Watch your savings grow and your financial skills improve with each transaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-6 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Transaction tracking dashboard with XP rewards"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Achievement gallery with badges and rewards"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                4
              </div>
              <h2 className="text-2xl font-bold mb-4">Unlock Achievements</h2>
              <p className="text-muted-foreground mb-4">
                Complete challenges and earn badges as you master money skills. From saving streaks to budget mastery,
                BudgetBuddy celebrates your financial wins with visual rewards.
              </p>
              <p className="text-muted-foreground">
                Share your achievements with friends and family to inspire them on their own financial journeys.
              </p>
            </div>
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
