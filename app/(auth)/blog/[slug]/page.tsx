"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Heart, Share2, BookOpen, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    likes: 127,
    shares: 43,
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
    likes: 89,
    shares: 32,
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
    likes: 156,
    shares: 67,
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
    likes: 203,
    shares: 91,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post?.likes || 0)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1)
    } else {
      setLikeCount((prev) => prev + 1)
    }
    setLiked(!liked)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <BackButton className="mb-6" />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{post.content.split(" ").length} words</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="bg-white rounded-lg p-6 md:p-8 mb-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.slice(2)}
                    </h1>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.slice(3)}
                    </h2>
                  )
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                      {paragraph.slice(4)}
                    </h3>
                  )
                } else if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.slice(2)}
                    </li>
                  )
                } else if (paragraph.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.replace(/^\d+\. /, "")}
                    </li>
                  )
                } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-bold mb-2">
                      {paragraph.slice(2, -2)}
                    </p>
                  )
                } else if (paragraph.trim() === "") {
                  return <br key={index} />
                } else {
                  return (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </div>

          {/* Engagement */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant={liked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className={liked ? "bg-red-500 hover:bg-red-600" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
                  {likeCount}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">{post.shares} shares</div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-muted-foreground">
                  Financial educator and teen money mentor with over 10 years of experience helping young people build
                  healthy financial habits.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary text-xs">{relatedPost.category}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2">{relatedPost.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button size="sm" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="mt-12 bg-white rounded-lg p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Want More Financial Tips?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly money tips, job opportunities, and exclusive content for teens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
