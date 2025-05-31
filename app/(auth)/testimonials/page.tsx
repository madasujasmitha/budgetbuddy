import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
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
          <h1 className="text-4xl font-bold mb-4">What Our Adventurers Say</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from teens who have leveled up their money skills with BudgetBuddy.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Alex, 16</h3>
                  <p className="text-sm text-muted-foreground">Level 8 Money Master</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "BudgetBuddy made saving for my new skateboard fun! I earned XP for tracking my expenses and completed
                quests to earn extra money. Now I'm saving for a gaming console! The best part is seeing my progress bar
                fill up with each deposit. It's like a game, but I'm actually learning real skills."
              </p>
              <p className="text-sm text-muted-foreground">
                Alex saved $200 for a skateboard in 3 months and learned how to track expenses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-secondary/20 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Maya, 15</h3>
                  <p className="text-sm text-muted-foreground">Level 10 Savings Champion</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "I used to spend money as soon as I got it. With BudgetBuddy, I've saved over $300 for concert tickets
                and learned how to find babysitting jobs in my neighborhood! The job board matched me with families
                looking for sitters, and I was able to reach my goal faster than I thought possible. Now I'm working on
                saving for a laptop for school."
              </p>
              <p className="text-sm text-muted-foreground">
                Maya found 5 babysitting jobs through BudgetBuddy and saved $300 for concert tickets.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-accent/20 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Tyler, 17</h3>
                  <p className="text-sm text-muted-foreground">Level 12 Job Hunter</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "The skill tree helped me discover my talent for web design. I've leveled up my skills and now I'm
                earning money creating websites for local businesses! BudgetBuddy connected me with learning resources
                and then helped me find my first clients. I'm saving for college now and already have a portfolio of
                work to show."
              </p>
              <p className="text-sm text-muted-foreground">
                Tyler learned web design through BudgetBuddy's skill tree and has earned over $1,000 from client work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Zoe, 14</h3>
                  <p className="text-sm text-muted-foreground">Level 6 Budget Wizard</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">
                "I never understood why budgeting was important until I started using BudgetBuddy. The money journal
                helped me realize I was spending a lot on snacks and impulse purchases. Now I plan my spending and have
                saved enough for a new phone in just 4 months! The daily quests keep me motivated to stick to my
                budget."
              </p>
              <p className="text-sm text-muted-foreground">
                Zoe reduced impulse spending by 70% and saved $250 for a new phone.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                Start Your Success Story
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
