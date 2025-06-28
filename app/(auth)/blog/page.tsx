import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold mb-4">BudgetBuddy Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, stories, and insights about teen financial education.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Teens building credit"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">May 15, 2024</div>
                <h2 className="text-xl font-bold mb-2">5 Ways Teens Can Start Building Credit Early</h2>
                <p className="text-muted-foreground mb-4">
                  Building good credit habits early can set you up for financial success. Here are five ways teens can
                  start building credit responsibly.
                </p>
                <Link href="/blog/building-credit-early">
                  <Button variant="outline" size="sm">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Teen job search tips"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">May 10, 2024</div>
                <h2 className="text-xl font-bold mb-2">How to Find Your First Job as a Teen</h2>
                <p className="text-muted-foreground mb-4">
                  Looking for your first job can be intimidating. Here's a step-by-step guide to finding and landing
                  your first job as a teenager.
                </p>
                <Link href="/blog/first-job-teen">
                  <Button variant="outline" size="sm">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Compound interest visualization"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-1">May 5, 2024</div>
                <h3 className="text-lg font-bold mb-2">The Power of Compound Interest</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Understanding compound interest is like discovering a superpower for your money.
                </p>
                <Link href="/blog/compound-interest-power">
                  <Button variant="ghost" size="sm" className="px-0">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Saving vs investing guide"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-1">April 28, 2024</div>
                <h3 className="text-lg font-bold mb-2">Saving vs. Investing: What's the Difference?</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Learn when to save and when to invest your money for maximum growth.
                </p>
                <Link href="/blog/saving-vs-investing">
                  <Button variant="ghost" size="sm" className="px-0">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Family money conversations"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-1">April 20, 2024</div>
                <h3 className="text-lg font-bold mb-2">How to Talk to Your Parents About Money</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Tips for having productive conversations with your parents about finances.
                </p>
                <Link href="/blog/talk-parents-money">
                  <Button variant="ghost" size="sm" className="px-0">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog/all">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                View All Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
