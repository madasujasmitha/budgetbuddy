"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, Search, Filter, SortAsc, SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BackButton } from "@/components/ui/back-button"

const blogPosts = [
  {
    id: 1,
    slug: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt:
      "Learn the fundamental principles of budgeting as a teenager and start building healthy financial habits that will last a lifetime.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "basics", "financial-literacy"],
    featured: true,
    image: "/placeholder.svg?height=300&width=400",
    likes: 127,
  },
  {
    id: 2,
    slug: "first-job-money-tips",
    title: "Got Your First Job? Here's How to Handle Your Money Like a Pro",
    excerpt:
      "Congratulations on your first job! Now let's make sure you're making smart decisions with your hard-earned money from day one.",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Career",
    tags: ["first-job", "paycheck", "career", "money-management"],
    featured: true,
    image: "/placeholder.svg?height=300&width=400",
    likes: 89,
  },
  {
    id: 3,
    slug: "saving-for-college",
    title: "Saving for College: A Teen's Complete Guide",
    excerpt:
      "College is expensive, but with the right strategy, you can reduce the financial burden and graduate with less debt.",
    author: "Dr. Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Education",
    tags: ["college", "savings", "education", "planning"],
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
    likes: 156,
  },
  {
    id: 4,
    slug: "teen-side-hustles-2024",
    title: "10 Profitable Side Hustles for Teens in 2024",
    excerpt:
      "Discover legitimate ways to earn money as a teenager, from online opportunities to local services that can boost your income.",
    author: "Alex Thompson",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Entrepreneurship",
    tags: ["side-hustles", "entrepreneurship", "teens", "income"],
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
    likes: 203,
  },
  {
    id: 5,
    slug: "building-credit-as-teen",
    title: "Building Credit as a Teen: A Smart Start to Your Financial Future",
    excerpt:
      "Learn how to start building credit responsibly as a teenager and set yourself up for financial success in adulthood.",
    author: "Jennifer Park",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Credit",
    tags: ["credit", "teens", "financial-planning", "responsibility"],
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
    likes: 94,
  },
  {
    id: 6,
    slug: "teen-investing-guide",
    title: "Teen Investing 101: Growing Your Money for the Future",
    excerpt:
      "It's never too early to start investing. Learn the basics of investing as a teenager and how to make your money work for you.",
    author: "Robert Kim",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Investing",
    tags: ["investing", "teens", "stocks", "future-planning"],
    featured: false,
    image: "/placeholder.svg?height=300&width=400",
    likes: 178,
  },
]

const categories = ["All", "Budgeting", "Career", "Education", "Entrepreneurship", "Credit", "Investing"]
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
  { value: "title", label: "Title A-Z" },
]

export default function AllArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.likes - a.likes
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto py-8 px-4">
        <BackButton className="mb-6" />

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">All Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of financial education articles for teens
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
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

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Mobile Filter Toggle */}
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="text-xs">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-destructive">
                    ×
                  </button>
                </Badge>
              )}
              {selectedCategory !== "All" && (
                <Badge variant="secondary" className="text-xs">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("All")} className="ml-1 hover:text-destructive">
                    ×
                  </button>
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="text-xs h-6 px-2"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? "s" : ""} found
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Sort:</span>
            {sortBy === "newest" && <SortDesc className="h-4 w-4" />}
            {sortBy === "oldest" && <SortAsc className="h-4 w-4" />}
            <span>{sortOptions.find((opt) => opt.value === sortBy)?.label}</span>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredAndSortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-3 left-3 bg-primary text-xs">{post.category}</Badge>
                  {post.featured && <Badge className="absolute top-3 right-3 bg-yellow-500 text-xs">Featured</Badge>}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>❤️ {post.likes}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button size="sm" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredAndSortedPosts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Showing all {filteredAndSortedPosts.length} articles</p>
            <Link href="/blog">
              <Button variant="outline">Back to Blog Home</Button>
            </Link>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-white rounded-lg p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Article</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest financial tips and articles delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
