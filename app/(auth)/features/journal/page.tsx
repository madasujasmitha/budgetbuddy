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
                src="data:image/jpeg;base64,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"
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
