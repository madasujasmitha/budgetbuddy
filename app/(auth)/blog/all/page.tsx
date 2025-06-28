import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Sample blog posts data (same as in individual post page)
const allBlogPosts = [
  {
    slug: "building-credit-early",
    title: "5 Ways Teens Can Start Building Credit Early",
    date: "May 15, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Building good credit habits early can set you up for financial success. Here are five ways teens can start building credit responsibly.",
    category: "Credit",
  },
  {
    slug: "first-job-teen",
    title: "How to Find Your First Job as a Teen",
    date: "May 10, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Looking for your first job can be intimidating. Here's a step-by-step guide to finding and landing your first job as a teenager.",
    category: "Career",
  },
  {
    slug: "compound-interest-power",
    title: "The Power of Compound Interest",
    date: "May 5, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Understanding compound interest is like discovering a superpower for your money.",
    category: "Investing",
  },
  {
    slug: "saving-vs-investing",
    title: "Saving vs. Investing: What's the Difference?",
    date: "April 28, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Learn when to save and when to invest your money for maximum growth.",
    category: "Investing",
  },
  {
    slug: "talk-parents-money",
    title: "How to Talk to Your Parents About Money",
    date: "April 20, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Tips for having productive conversations with your parents about finances.",
    category: "Family Finance",
  },
  {
    slug: "budgeting-basics",
    title: "Budgeting Basics for Teens",
    date: "April 15, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Learn the fundamentals of creating and sticking to a budget that works for your lifestyle.",
    category: "Budgeting",
  },
  {
    slug: "side-hustles-teens",
    title: "Best Side Hustles for Teens",
    date: "April 10, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Discover creative ways to earn extra money while balancing school and other commitments.",
    category: "Career",
  },
  {
    slug: "financial-apps-teens",
    title: "Top Financial Apps Every Teen Should Use",
    date: "April 5, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Technology can make managing money easier. Here are the best financial apps for teenagers.",
    category: "Technology",
  },
]

export default function AllBlogPostsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of financial education articles for teens.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Credit", "Career", "Investing", "Budgeting", "Family Finance", "Technology"].map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-video">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </div>
  )
}
