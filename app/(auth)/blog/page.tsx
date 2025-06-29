"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"

const blogPosts = [
  {
    id: 1,
    slug: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt:
      "Learn the fundamental principles of budgeting as a teenager and start building healthy financial habits that will last a lifetime.",
    content: `# Teen Budgeting Basics: Your First Step to Financial Freedom

Starting your financial journey as a teenager might seem overwhelming, but it's actually the perfect time to build habits that will serve you for life. Let's break down the basics of budgeting in a way that's practical and achievable.

## Why Budget as a Teen?

Budgeting isn't just about restricting your spending—it's about taking control of your money so you can achieve your goals. Whether you want to save for a car, college, or just have more freedom with your spending, a budget is your roadmap.

## The 50/30/20 Rule for Teens

A simple budgeting framework that works great for teenagers:
- **50% for Needs**: Essential expenses like transportation, school supplies, or contributions to family expenses
- **30% for Wants**: Entertainment, eating out, clothes, and fun activities
- **20% for Savings**: Building your emergency fund and saving for bigger goals

## Getting Started

1. **Track Your Income**: Whether it's from a part-time job, allowance, or gifts, know exactly how much money you have coming in each month.

2. **List Your Expenses**: Write down everything you spend money on, from bus fare to that daily coffee.

3. **Set Goals**: What do you want to achieve? Having clear goals makes budgeting much easier.

4. **Use Tools**: Apps like BudgetBuddy make tracking your money fun and engaging with gamification elements.

## Common Teen Budgeting Mistakes

- **Not tracking small expenses**: Those $5 purchases add up quickly
- **Being too restrictive**: Leave room for fun or you'll abandon your budget
- **Not planning for irregular expenses**: Things like gifts, school events, or seasonal activities

## Making It Stick

The key to successful budgeting is making it a habit. Start small, be consistent, and celebrate your wins. Remember, every financial expert started exactly where you are now.

Your future self will thank you for starting early!`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "basics", "financial-literacy"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    slug: "first-job-money-tips",
    title: "Got Your First Job? Here's How to Handle Your Money Like a Pro",
    excerpt:
      "Congratulations on your first job! Now let's make sure you're making smart decisions with your hard-earned money from day one.",
    content: `# Got Your First Job? Here's How to Handle Your Money Like a Pro

Landing your first job is exciting! That first paycheck feels amazing, but what you do with it can set the tone for your entire financial future. Let's make sure you're making smart moves from the start.

## Before You Spend a Penny

**Understand Your Paycheck**: Your gross pay isn't what you take home. Taxes, Social Security, and other deductions will reduce your actual income. Understanding this prevents overspending.

**Set Up Direct Deposit**: Get your money deposited directly into a bank account. This makes it easier to track and saves you trips to the bank.

## The First Paycheck Rule

Here's a rule that will serve you well: Don't spend your first paycheck on wants. Instead:
1. Pay any necessary expenses
2. Put the rest in savings
3. Use this as your baseline for future budgeting

## Smart Money Moves for New Workers

### 1. Pay Yourself First
Before you pay for anything else, put money into savings. Even if it's just $20 per paycheck, start the habit now.

### 2. Understand Taxes
You'll likely need to file a tax return. Keep track of your earnings and any work-related expenses. Consider using tax software or asking for help.

### 3. Don't Lifestyle Inflate Too Quickly
Just because you have money doesn't mean you need to spend it all. Avoid the temptation to upgrade everything at once.

### 4. Learn About Benefits
If your job offers benefits like a 401(k) or health insurance, learn about them. Even if you can't use them now, understanding them is valuable.

## Building Good Habits

- **Track every dollar** for your first few months
- **Review your spending** weekly
- **Set specific savings goals**
- **Learn about investing** (even if you're not ready yet)

## Avoiding Common Mistakes

**Don't**: Spend your entire first paycheck celebrating
**Don't**: Ignore taxes and get surprised at tax time
**Don't**: Forget to budget for work expenses (gas, lunch, clothes)
**Do**: Start building credit responsibly
**Do**: Keep learning about money management
**Do**: Celebrate your wins (within budget!)

Remember, developing good money habits now will pay dividends for the rest of your life. Your first job is just the beginning of your financial journey!`,
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Career",
    tags: ["first-job", "paycheck", "career", "money-management"],
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    slug: "saving-for-college",
    title: "Saving for College: A Teen's Complete Guide",
    excerpt:
      "College is expensive, but with the right strategy, you can reduce the financial burden and graduate with less debt.",
    content: `# Saving for College: A Teen's Complete Guide

College costs can seem overwhelming, but starting early gives you a huge advantage. Let's create a plan that makes college more affordable and sets you up for success.

## Understanding College Costs

College expenses include:
- **Tuition and fees**
- **Room and board**
- **Books and supplies**
- **Transportation**
- **Personal expenses**

The average cost varies widely, from community colleges at around $3,000/year to private universities at $50,000+/year.

## Creating Your College Savings Plan

### Step 1: Research Costs
Look up the actual costs of schools you're interested in. This gives you a real target to work toward.

### Step 2: Calculate Your Timeline
How many years until college? This determines how aggressive your savings need to be.

### Step 3: Set Monthly Goals
If you need $20,000 in 4 years, that's about $417 per month. Seems like a lot? Let's break it down further.

## Smart Saving Strategies

### High-Yield Savings Accounts
Your money should earn money while you save. Look for accounts with the highest interest rates.

### 529 Education Savings Plans
These accounts offer tax advantages for education expenses. Ask your parents about opening one.

### Automatic Transfers
Set up automatic transfers to your college fund. You can't spend what you don't see.

## Earning More for College

### Part-Time Jobs
Even working 10 hours a week can significantly boost your college fund.

### Summer Jobs
Summer jobs can be more intensive and really accelerate your savings.

### Scholarships and Grants
Start researching and applying early. Free money is the best money!

### Work-Study Programs
Many colleges offer work-study programs that help you earn money while in school.

## Reducing College Costs

### Community College First
Starting at a community college can save thousands on your first two years.

### In-State Schools
In-state tuition is typically much lower than out-of-state.

### Living at Home
If possible, living at home can save $10,000+ per year on room and board.

### Buy Used Textbooks
Textbooks are expensive, but there are many ways to get them cheaper.

## The Power of Starting Early

Starting to save at 14 vs. 17 makes a huge difference:
- **At 14**: $200/month for 4 years = $9,600 + interest
- **At 17**: $800/month for 1 year = $9,600 (much harder to achieve)

## Making It Happen

1. **Open a dedicated college savings account**
2. **Set up automatic transfers**
3. **Track your progress monthly**
4. **Look for ways to increase income**
5. **Research scholarships continuously**

Remember, every dollar you save now is a dollar you won't have to borrow later. Student loans have to be paid back with interest, so saving now literally saves you money in the long run.

Your college dreams are achievable with the right plan and consistent action!`,
    author: "Dr. Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Education",
    tags: ["college", "savings", "education", "planning"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    slug: "teen-side-hustles-2024",
    title: "10 Profitable Side Hustles for Teens in 2024",
    excerpt:
      "Discover legitimate ways to earn money as a teenager, from online opportunities to local services that can boost your income.",
    content: `# 10 Profitable Side Hustles for Teens in 2024

Want to earn extra money but not sure where to start? Here are 10 proven side hustles that teens are using to boost their income in 2024.

## Online Opportunities

### 1. Social Media Management
Many small businesses need help with their social media. If you're already spending time on Instagram, TikTok, and Facebook, why not get paid for it?

**Potential Earnings**: $15-30/hour
**Getting Started**: Create a portfolio of your own social media success, then reach out to local businesses.

### 2. Tutoring
Help younger students with subjects you excel in. Online tutoring platforms make this easier than ever.

**Potential Earnings**: $12-25/hour
**Getting Started**: Sign up for platforms like Tutor.com or Wyzant, or advertise locally.

### 3. Content Creation
YouTube, TikTok, and Instagram can be monetized once you build an audience.

**Potential Earnings**: Varies widely
**Getting Started**: Pick a niche you're passionate about and start creating consistently.

## Local Services

### 4. Pet Sitting/Dog Walking
Perfect for animal lovers! Apps like Rover make it easy to find clients.

**Potential Earnings**: $15-30 per visit
**Getting Started**: Create profiles on pet-sitting apps and ask neighbors if they need help.

### 5. Lawn Care
Seasonal but profitable, especially in suburban areas.

**Potential Earnings**: $25-50 per lawn
**Getting Started**: Invest in basic equipment and advertise in your neighborhood.

### 6. House Sitting
Watch people's homes while they're away. Often includes pet care too.

**Potential Earnings**: $25-75 per day
**Getting Started**: Start with family friends and neighbors, then expand through referrals.

## Creative Services

### 7. Graphic Design
If you have design skills, many businesses need logos, flyers, and social media graphics.

**Potential Earnings**: $20-100+ per project
**Getting Started**: Build a portfolio and use platforms like Fiverr or 99designs.

### 8. Photography
Event photography, senior portraits, or stock photography can be lucrative.

**Potential Earnings**: $50-500+ per event
**Getting Started**: Practice with friends and family, then start advertising your services.

## Seasonal Opportunities

### 9. Holiday Decorating
Help people decorate for holidays, especially Christmas.

**Potential Earnings**: $20-50/hour
**Getting Started**: Advertise in November and December in your community.

### 10. Snow Removal
If you live in a snowy area, this can be very profitable during winter months.

**Potential Earnings**: $20-50 per driveway
**Getting Started**: Invest in a good shovel and advertise before the first snowfall.

## Tips for Success

### Start Small
Don't try to do everything at once. Pick 1-2 side hustles and do them well.

### Be Professional
Even though you're young, act professionally. Show up on time, communicate clearly, and do quality work.

### Track Your Earnings
Keep records of what you earn for tax purposes and to see which hustles are most profitable.

### Reinvest in Yourself
Use some of your earnings to improve your skills or buy better equipment.

### Save and Invest
Don't spend everything you earn. Put a portion into savings and investments.

## Legal Considerations

- **Check local laws** about teen employment
- **Get necessary permits** for business activities
- **Understand tax implications** of your earnings
- **Have parental permission** for online activities

## Getting Started Today

1. **Choose one side hustle** that matches your skills and interests
2. **Research the requirements** and competition in your area
3. **Create a simple business plan**
4. **Start marketing your services**
5. **Deliver excellent work** to build your reputation

Remember, the goal isn't just to make money now—it's to develop skills, work ethic, and business sense that will serve you throughout your life. Every successful entrepreneur started somewhere, and many started as teenagers with simple side hustles.

Your financial future starts with the actions you take today!`,
    author: "Alex Thompson",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Entrepreneurship",
    tags: ["side-hustles", "entrepreneurship", "teens", "income"],
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = ["All", "Budgeting", "Career", "Education", "Entrepreneurship", "Investing"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto py-8 px-4">
        <BackButton className="mb-6" />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">BudgetBuddy Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your guide to mastering money, discovering opportunities, and building a bright financial future
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {searchTerm === "" && selectedCategory === "All" && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button className="w-full">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
            </h2>
            <Link href="/blog/all">
              <Button variant="outline">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-2 left-2 bg-primary text-xs">{post.category}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest financial tips, job opportunities, and money management advice delivered to your inbox.
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
