import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-4">About BudgetBuddy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our mission is to make financial education fun and accessible for teens.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                BudgetBuddy was founded in 2023 by a team of financial educators and game designers who saw a gap in
                financial education for teens. We believed that learning about money shouldn't be boring or
                intimidating.
              </p>
              <p className="text-muted-foreground">
                By combining game mechanics with solid financial principles, we created a platform that makes managing
                money feel like an adventure rather than a chore.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">Team photo placeholder</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Education Through Play</h3>
                  <p className="text-muted-foreground">We believe the best learning happens when you're having fun.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Financial Empowerment</h3>
                  <p className="text-muted-foreground">
                    We're committed to giving teens the tools to take control of their financial future.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    Financial education should be accessible to all teens, regardless of background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                Join Our Mission
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
