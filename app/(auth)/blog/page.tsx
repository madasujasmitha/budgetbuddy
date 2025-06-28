"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

const featuredPost = {
  id: "teen-budgeting-basics",
  title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
  excerpt:
    "Learn the fundamental principles of budgeting as a teenager and start building healthy money habits that will serve you for life.",
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "Budgeting",
  image: "/placeholder.svg?height=400&width=600",
}

const blogPosts = [
  {
    id: "first-job-money-tips",
    title: "Got Your First Job? Here's How to Handle Your Money Like a Pro",
    excerpt:
      "Congratulations on your first job! Learn how to make the most of your new income with these essential money management tips.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Career",
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
    image: "/placeholder.svg?height=300&width=400",
  },
]

const categories = [
  { name: "Budgeting", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "Career", count: 8, color: "bg-green-100 text-green-800" },
  { name: "Education", count: 6, color: "bg-purple-100 text-purple-800" },
  { name: "Investing", count: 5, color: "bg-orange-100 text-orange-800" },
  { name: "Credit", count: 4, color: "bg-red-100 text-red-800" },
  { name: "Psychology", count: 3, color: "bg-yellow-100 text-yellow-800" },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">BudgetBuddy Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your go-to resource for financial education, career tips, and money management advice designed
              specifically for teenagers.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button size="lg">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                      {category.name}
                    </div>
                    <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Articles */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              <Link href="/blog/all">
                <Button variant="outline">
                  View All Articles
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
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
                    <CardTitle className="text-lg leading-tight">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

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

                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest financial tips and articles delivered straight to your inbox. Join thousands of teens
              building better money habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
