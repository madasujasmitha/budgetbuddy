"use client"

import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"

// Sample blog posts data
const featuredPost = {
  slug: "teen-budgeting-basics",
  title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
  excerpt:
    "Learn the fundamentals of budgeting as a teenager and start building healthy money habits early. This comprehensive guide covers everything from the 50/30/20 rule to practical budgeting tools.",
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "Budgeting",
  image: "/placeholder.svg?height=400&width=800",
}

const recentPosts = [
  {
    slug: "summer-job-guide",
    title: "The Ultimate Summer Job Guide for Teens",
    excerpt: "Discover the best summer job opportunities for teenagers and learn how to land your first job.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Career",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "saving-for-college",
    title: "Smart Strategies for Saving for College",
    excerpt: "Learn effective ways to save money for college expenses and reduce student debt.",
    author: "Dr. Emily Rodriguez",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Savings",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "investing-for-beginners",
    title: "Investing 101: A Beginner's Guide for Teens",
    excerpt: "Start your investment journey early with this comprehensive guide to investing basics.",
    author: "Alex Thompson",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Investing",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const categories = [
  { name: "Budgeting", count: 8, color: "bg-blue-100 text-blue-800" },
  { name: "Career", count: 6, color: "bg-green-100 text-green-800" },
  { name: "Savings", count: 5, color: "bg-purple-100 text-purple-800" },
  { name: "Investing", count: 4, color: "bg-orange-100 text-orange-800" },
  { name: "Credit", count: 3, color: "bg-red-100 text-red-800" },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <BookOpen className="mr-3 h-10 w-10 text-primary" />
            BudgetBuddy Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your go-to resource for financial education, money tips, and career advice designed specifically for teens
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-primary" />
            Featured Article
          </h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button size="lg" className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <Link href="/blog/all">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/blog/all?category=${category.name}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Badge className={`${category.color} mb-2`}>{category.name}</Badge>
                    <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
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
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
