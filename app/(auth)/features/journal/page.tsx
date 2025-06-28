import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function JournalFeaturePage() {
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
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Money Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your emotional relationship with money and develop healthy financial habits.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-muted rounded-lg p-6 aspect-video flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=400&h=250&fit=crop&crop=center"
                alt="Journal visualization image"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Understand Your Money Emotions</h2>
              <p className="text-muted-foreground mb-4">
                The Money Journal helps you track how you feel about your financial decisions. By understanding the
                emotions behind your spending and saving, you can develop healthier money habits.
              </p>
              <p className="text-muted-foreground">
                Reflect on your purchases, celebrate your savings wins, and learn from your financial choices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Emotional Tracking</h3>
                <p className="text-muted-foreground">
                  Record how you feel about your financial decisions and spot patterns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Reflection Prompts</h3>
                <p className="text-muted-foreground">
                  Guided questions help you think deeper about your money choices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Habit Insights</h3>
                <p className="text-muted-foreground">
                  Get personalized insights about your spending and saving habits.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                Start Your Journal
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
