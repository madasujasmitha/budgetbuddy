"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, Filter } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
}

const allBlogPosts: BlogPost[] = [
  {
    id: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt:
      "Learn the fundamental principles of budgeting as a teenager and start building healthy money habits early.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "financial literacy", "money management"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "first-job-money-tips",
    title: "Got Your First Job? Here's How to Handle Your Money Like a Pro",
    excerpt:
      "Congratulations on your first job! Learn how to make the most of your new income with these essential money management tips.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Career",
    tags: ["first job", "income", "career", "money management"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "saving-for-college",
    title: "Saving for College: A Teen's Complete Guide",
    excerpt:
      "College is expensive, but with the right strategy, you can reduce the financial burden. Here's how to start saving smart.",
    author: "Dr. Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Education",
    tags: ["college", "education", "savings", "financial planning"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "building-credit-as-teen",
    title: "Building Credit as a Teen: What You Need to Know",
    excerpt: "Learn the basics of credit and how to start building a positive credit history early in life.",
    author: "Jennifer Park",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Credit",
    tags: ["credit", "credit score", "financial responsibility"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "teen-investment-basics",
    title: "Teen Investment Basics: Growing Your Money",
    excerpt: "Introduction to investing concepts and options for teenagers looking to grow their wealth.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Investing",
    tags: ["investing", "stocks", "compound interest", "wealth building"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "money-mindset-for-teens",
    title: "Developing a Healthy Money Mindset",
    excerpt: "How your thoughts about money shape your financial future and how to develop positive money beliefs.",
    author: "Dr. Amanda Foster",
    date: "2023-12-25",
    readTime: "7 min read",
    category: "Psychology",
    tags: ["mindset", "psychology", "money beliefs", "financial wellness"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "side-hustles-for-teens",
    title: "10 Profitable Side Hustles for Teenagers",
    excerpt: "Discover legitimate ways to earn extra money as a teenager while balancing school and other commitments.",
    author: "Alex Thompson",
    date: "2023-12-20",
    readTime: "11 min read",
    category: "Career",
    tags: ["side hustles", "entrepreneurship", "teen jobs", "extra income"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "financial-goals-for-teens",
    title: "Setting and Achieving Financial Goals as a Teen",
    excerpt: "Learn how to set realistic financial goals and create actionable plans to achieve them.",
    author: "Maria Gonzalez",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Goal Setting",
    tags: ["goals", "planning", "motivation", "achievement"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "teen-banking-guide",
    title: "Teen Banking Guide: Choosing Your First Bank Account",
    excerpt: "Everything you need to know about opening and managing your first bank account as a teenager.",
    author: "Robert Lee",
    date: "2023-12-10",
    readTime: "9 min read",
    category: "Banking",
    tags: ["banking", "savings account", "checking account", "financial institutions"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = [
  "All",
  "Budgeting",
  "Career",
  "Education",
  "Credit",
  "Investing",
  "Psychology",
  "Goal Setting",
  "Banking",
]

export default function AllBlogPostsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const filteredPosts = allBlogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">All Articles</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of financial education articles designed specifically for teenagers.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border rounded-md px-3 py-2 bg-background"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-3 py-2 bg-background"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredPosts.length} of {allBlogPosts.length} articles
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button className="w-full">Read Full Article</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More (for future implementation) */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to see more articles? Check back regularly for new content!
              </p>
              <Link href="/blog">
                <Button variant="outline">Back to Featured Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
