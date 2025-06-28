import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Target, TrendingUp, Award, Zap, CheckCircle, Star } from "lucide-react"

export default function GoalsFeaturePage() {
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
          <h1 className="text-4xl font-bold mb-4">Set Epic Quests</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your savings goals into exciting quests with visual progress tracking and rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Transform Saving Into an Adventure</h2>
            <p className="text-muted-foreground mb-4">
              Instead of boring spreadsheets, BudgetBuddy turns your financial goals into epic quests. Set a target,
              track your progress, and celebrate milestones along the way.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                <span>Visual progress tracking</span>
              </li>
              <li className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span>Milestone rewards and celebrations</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <span>XP points for every contribution</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
              alt="Goal tracking interface showing a skateboard savings quest"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Smart Goal Setting</h3>
              <p className="text-sm text-muted-foreground">
                Set SMART goals with target amounts, deadlines, and categories that match your interests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Progress Visualization</h3>
              <p className="text-sm text-muted-foreground">
                Watch your progress grow with beautiful charts, progress bars, and milestone celebrations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Achievement Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Unlock badges, earn XP, and celebrate when you reach your goals with special rewards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your First Quest?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of teens who have already achieved their savings goals with BudgetBuddy.
          </p>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
              <Star className="mr-2 h-4 w-4" />
              Start Your Adventure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
