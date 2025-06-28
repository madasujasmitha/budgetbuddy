"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BackButton } from "@/components/ui/back-button"

// Sample blog posts data
const allBlogPosts = [
  {
    slug: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt: "Learn the fundamentals of budgeting as a teenager and start building healthy money habits early.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "money management", "savings"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "summer-job-guide",
    title: "The Ultimate Summer Job Guide for Teens",
    excerpt: "Discover the best summer job opportunities for teenagers and learn how to land your first job.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Career",
    tags: ["summer jobs", "teens", "career", "work experience"],
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
    tags: ["college", "savings", "education", "financial planning"],
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
    tags: ["investing", "stocks", "beginners", "financial literacy"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "side-hustles-for-teens",
    title: "10 Profitable Side Hustles for Teenagers",
    excerpt: "Explore creative ways to earn money as a teen with these proven side hustle ideas.",
    author: "Jessica Park",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Career",
    tags: ["side hustles", "entrepreneurship", "teens", "income"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "credit-cards-for-teens",
    title: "Understanding Credit: A Teen's Guide to Building Credit",
    excerpt: "Learn about credit scores, credit cards, and how to build good credit from a young age.",
    author: "Robert Kim",
    date: "2023-12-25",
    readTime: "11 min read",
    category: "Credit",
    tags: ["credit", "credit cards", "credit score", "financial responsibility"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "money-mindset-for-teens",
    title: "Developing a Healthy Money Mindset as a Teenager",
    excerpt: "Explore the psychology of money and develop positive financial attitudes that will last a lifetime.",
    author: "Dr. Maria Santos",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Psychology",
    tags: ["money mindset", "psychology", "financial wellness", "teens"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "emergency-fund-teens",
    title: "Why Every Teen Needs an Emergency Fund",
    excerpt: "Learn the importance of emergency funds and how to build one as a teenager.",
    author: "Sarah Johnson",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Savings",
    tags: ["emergency fund", "savings", "financial security", "teens"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "financial-apps-for-teens",
    title: "Best Financial Apps Every Teen Should Use",
    excerpt: "Discover the top apps that can help teenagers manage money, save, and learn about finance.",
    author: "Tech Team",
    date: "2023-12-10",
    readTime: "8 min read",
    category: "Technology",
    tags: ["apps", "technology", "money management", "teens"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "teen-entrepreneur-stories",
    title: "Inspiring Teen Entrepreneur Success Stories",
    excerpt: "Get motivated by real stories of teenagers who started successful businesses.",
    author: "Mike Chen",
    date: "2023-12-05",
    readTime: "13 min read",
    category: "Entrepreneurship",
    tags: ["entrepreneurship", "success stories", "teens", "business"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

const categories = [
  "All",
  "Budgeting",
  "Career",
  "Savings",
  "Investing",
  "Credit",
  "Psychology",
  "Technology",
  "Entrepreneurship",
]

export default function AllArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  // Filter and sort posts
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
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "title":
          return a.title.localeCompare(b.title)
        case "readTime":
          return Number.parseInt(a.readTime) - Number.parseInt(b.readTime)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Articles</h1>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of financial education articles for teens
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="readTime">Read Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPosts.length} of {allBlogPosts.length} articles
          </p>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          Read <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
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

        {/* Load More Button (for future pagination) */}
        {filteredPosts.length > 0 && filteredPosts.length >= 9 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
