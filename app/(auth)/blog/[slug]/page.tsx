"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Share2 } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
}

const blogPosts: Record<string, BlogPost> = {
  "teen-budgeting-basics": {
    id: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt:
      "Learn the fundamental principles of budgeting as a teenager and start building healthy money habits early.",
    content: `
# Teen Budgeting Basics: Your First Step to Financial Freedom

Starting your financial journey as a teenager might seem overwhelming, but it's actually the perfect time to build healthy money habits that will serve you for life. Let's break down the basics of budgeting in a way that's practical and achievable for teens.

## Why Budget as a Teen?

Budgeting isn't just about restricting your spending – it's about taking control of your money and making intentional decisions about how you use it. When you budget as a teen, you:

- Learn valuable life skills early
- Develop discipline and self-control
- Reduce financial stress
- Work toward your goals more effectively
- Prepare for adult financial responsibilities

## The 50/30/20 Rule for Teens

A simple budgeting framework that works well for teenagers is the modified 50/30/20 rule:

- **50% for Needs**: Essential expenses like school supplies, transportation, or contributions to family expenses
- **30% for Wants**: Entertainment, eating out with friends, hobbies, and fun purchases
- **20% for Savings**: Building your emergency fund and saving for bigger goals

## Getting Started: Your First Budget

### Step 1: Track Your Income
List all sources of money coming in:
- Part-time job wages
- Allowance from parents
- Money from chores
- Birthday or holiday gifts
- Side hustles (babysitting, lawn care, etc.)

### Step 2: List Your Expenses
Write down everything you spend money on:
- Fixed expenses (phone bill, transportation)
- Variable expenses (food, entertainment, clothes)
- Savings goals

### Step 3: Choose Your Budgeting Method
- **Envelope Method**: Use cash for different spending categories
- **Digital Apps**: Use budgeting apps designed for teens
- **Spreadsheet**: Create a simple Excel or Google Sheets budget
- **Notebook**: Keep a written record of income and expenses

## Common Teen Budgeting Mistakes to Avoid

1. **Being Too Restrictive**: Don't cut out all fun – you'll likely give up on budgeting entirely
2. **Forgetting Small Purchases**: Those $5 coffee runs add up quickly
3. **Not Planning for Irregular Expenses**: Save for things like prom, school trips, or gifts
4. **Comparing Yourself to Others**: Focus on your own financial goals, not what your friends are spending

## Building Your Emergency Fund

Even as a teen, having an emergency fund is important. Start small – even $100 can help with unexpected expenses like:
- Phone repairs
- Emergency transportation
- Last-minute school supplies
- Medical expenses

## Setting Financial Goals

Make your money goals specific and achievable:
- **Short-term** (1-3 months): New video game, concert tickets
- **Medium-term** (3-12 months): New laptop, car savings
- **Long-term** (1+ years): College fund, first apartment deposit

## Tips for Sticking to Your Budget

1. **Review Weekly**: Check in with your budget every week
2. **Adjust as Needed**: Your budget should evolve with your life
3. **Celebrate Wins**: Acknowledge when you meet your savings goals
4. **Learn from Mistakes**: If you overspend, figure out why and adjust
5. **Get Support**: Talk to family or friends about your financial goals

## The Power of Starting Early

The habits you build now will compound over time. A teenager who learns to budget and save has a huge advantage over someone who starts these habits in their 20s or 30s. You're not just managing money – you're building the foundation for a financially secure future.

Remember, budgeting is a skill that improves with practice. Don't expect to be perfect right away. The important thing is to start, learn from your experiences, and keep improving your financial habits over time.

Your future self will thank you for starting this journey now!
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "financial literacy", "money management"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "first-job-money-tips": {
    id: "first-job-money-tips",
    title: "Got Your First Job? Here's How to Handle Your Money Like a Pro",
    excerpt:
      "Congratulations on your first job! Learn how to make the most of your new income with these essential money management tips.",
    content: `
# Got Your First Job? Here's How to Handle Your Money Like a Pro

Landing your first job is exciting! You're probably thinking about all the things you can finally buy with your own money. But before you start spending, let's talk about how to handle your new income like a financial pro.

## The First Paycheck Feeling

That first paycheck hits different, doesn't it? You worked for this money, and it feels amazing to have earned it yourself. But here's the thing – how you handle this first taste of financial independence will set the tone for your entire financial future.

## The Golden Rules of First-Job Money Management

### Rule #1: Pay Yourself First
Before you spend a single dollar, set aside money for savings. Even if it's just $20 from your first paycheck, make saving a non-negotiable habit from day one.

### Rule #2: Don't Lifestyle Inflate Too Quickly
Just because you have money doesn't mean you need to upgrade everything immediately. Resist the urge to suddenly buy expensive clothes, gadgets, or start eating out constantly.

### Rule #3: Track Every Dollar
When money is new to you, it's easy to lose track of where it goes. Use an app, spreadsheet, or notebook to monitor your spending.

## Smart Moves for Your First Job Income

### Open the Right Bank Accounts
- **Checking Account**: For daily expenses and bills
- **Savings Account**: For your emergency fund and goals
- **Consider a High-Yield Savings Account**: Earn more interest on your savings

### Set Up Automatic Transfers
Make saving effortless by automatically transferring a portion of each paycheck to savings. Start with 10-20% if possible.

### Understand Your Paycheck
Learn about:
- Gross pay vs. net pay
- Tax deductions
- Social Security and Medicare contributions
- Any benefits deductions

## Creating Your First Real Budget

Now that you have regular income, it's time for a more sophisticated budget:

### The Teen Worker's Budget Framework:
- **40% for Current Expenses**: Transportation, food, entertainment
- **30% for Savings Goals**: Emergency fund, big purchases, college
- **20% for Long-term Savings**: Future goals, investments
- **10% for Fun Money**: Guilt-free spending on whatever you want

## Avoiding Common First-Job Money Mistakes

### Mistake #1: Spending Your Entire First Paycheck
It's tempting, but don't do it. Save at least something from every paycheck.

### Mistake #2: Not Planning for Taxes
If you're working as an independent contractor or your employer doesn't withhold taxes, set aside 20-25% for tax time.

### Mistake #3: Ignoring Work Benefits
Even part-time jobs sometimes offer benefits. Understand what's available to you.

### Mistake #4: Not Tracking Work Expenses
Keep receipts for work-related expenses – they might be tax-deductible.

## Building Your Professional Financial Habits

### Start an Emergency Fund
Aim for $500-1000 initially. This will cover:
- Car repairs
- Medical expenses
- Job loss buffer
- Unexpected opportunities

### Learn About Investing
You don't need to start investing immediately, but learn the basics:
- What is compound interest?
- Different types of investment accounts
- Risk vs. reward concepts

### Build Credit Responsibly
Consider becoming an authorized user on a parent's credit card or getting a secured credit card to start building credit history.

## Setting Financial Goals with Real Income

Now that you have steady income, you can set more ambitious goals:

### Short-term Goals (1-6 months):
- Build a $500 emergency fund
- Save for a specific purchase
- Pay for your own phone bill

### Medium-term Goals (6 months - 2 years):
- Save for a car
- Build college fund
- Plan a trip with friends

### Long-term Goals (2+ years):
- College expenses
- First apartment
- Investment account

## The Psychology of Earned Money

Money you earn feels different from money you're given. You worked for it, so you might feel more attached to it. This can be both good and bad:

**Good**: You'll likely be more thoughtful about spending
**Bad**: You might feel entitled to spend it all since you "earned it"

Remember: earning money is just the first step. Managing it well is what builds wealth.

## Talking Money with Family

Your first job might change family financial dynamics:
- Discuss expectations about contributing to household expenses
- Talk about your financial goals
- Ask for guidance on money management
- Be open about your income and expenses

## Planning for the Future

Even with your first job, start thinking long-term:
- How will you pay for college?
- What career path interests you?
- What financial skills do you need to develop?
- How can you increase your earning potential?

## The Bottom Line

Your first job is more than just a way to make money – it's your first step into financial adulthood. The habits you build now will serve you for decades to come.

Be proud of your hard work, but be smart with your money. Save consistently, spend thoughtfully, and always keep learning about personal finance.

Your future financially successful self is counting on the decisions you make today!
    `,
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Career",
    tags: ["first job", "income", "career", "money management"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "saving-for-college": {
    id: "saving-for-college",
    title: "Saving for College: A Teen's Complete Guide",
    excerpt:
      "College is expensive, but with the right strategy, you can reduce the financial burden. Here's how to start saving smart.",
    content: `
# Saving for College: A Teen's Complete Guide

College costs can seem overwhelming, but here's some good news: every dollar you save now is a dollar you won't have to borrow later. Let's break down how to approach college savings as a teenager.

## Understanding College Costs

Before you start saving, understand what you're saving for:

### Tuition and Fees
- Public in-state: ~$10,000-15,000/year
- Public out-of-state: ~$25,000-35,000/year
- Private colleges: ~$35,000-50,000+/year

### Room and Board
- On-campus housing: ~$10,000-15,000/year
- Off-campus: Varies by location

### Other Expenses
- Books and supplies: ~$1,200/year
- Transportation: ~$1,000/year
- Personal expenses: ~$2,000/year

## The Power of Starting Early

Let's say you want to save $20,000 for college:
- Starting at 14: Save ~$278/month for 4 years
- Starting at 16: Save ~$417/month for 4 years
- Starting at 17: Save ~$833/month for 2 years

The earlier you start, the less you need to save each month!

## College Savings Strategies for Teens

### Strategy 1: The 529 Education Savings Plan
- Tax-advantaged savings specifically for education
- Parents usually open these, but you can contribute
- Money grows tax-free when used for qualified education expenses

### Strategy 2: High-Yield Savings Account
- Safe and accessible
- Earns more interest than regular savings
- Good for short-term college savings

### Strategy 3: Custodial Investment Account
- Potential for higher returns
- More risk than savings accounts
- Good for longer-term savings (3+ years until college)

## How Much Should You Save?

### The 1/3 Rule
Plan to cover college costs through:
- 1/3 savings (yours and parents')
- 1/3 financial aid/scholarships
- 1/3 current income (part-time work during college)

### Your Personal Savings Goal
Aim to save at least:
- $5,000-10,000 for community college
- $15,000-25,000 for in-state public university
- $30,000+ for private or out-of-state schools

## Creative Ways to Boost College Savings

### Maximize Gift Money
Ask relatives to contribute to your college fund instead of giving traditional gifts for birthdays and holidays.

### Side Hustles for College
- Tutoring younger students
- Pet sitting/dog walking
- Selling crafts or services online
- Seasonal work (summer jobs, holiday retail)

### Scholarship Hunting
Start early! Many scholarships are available for high school students:
- Academic scholarships
- Athletic scholarships
- Community service awards
- Essay contests
- Unique talent scholarships

## The College Savings Timeline

### Freshman Year (Age 14-15)
- Open a dedicated college savings account
- Start with small, consistent contributions
- Learn about different college options and costs

### Sophomore Year (Age 15-16)
- Increase savings as you get older
- Start researching scholarships
- Consider getting a part-time job

### Junior Year (Age 16-17)
- Ramp up savings efforts
- Apply for early scholarships
- Start visiting colleges to understand real costs

### Senior Year (Age 17-18)
- Apply for financial aid (FAFSA)
- Apply for scholarships aggressively
- Make final college savings push

## Reducing College Costs

Saving money is just one part of the equation. You can also reduce costs:

### Academic Strategies
- Take AP classes for college credit
- Consider dual enrollment at community college
- Graduate early if possible

### School Choice Strategies
- Start at community college, then transfer
- Choose in-state public universities
- Look for schools with good financial aid

### Living Strategies
- Live at home if possible
- Choose less expensive housing options
- Cook your own meals instead of meal plans

## Balancing College Savings with Other Goals

You don't have to save every penny for college. It's important to:
- Keep some money for current enjoyment
- Save for other goals (car, emergency fund)
- Maintain a balanced approach to money

## What If You Can't Save Enough?

Don't panic! Many successful people graduated with student loans. The key is:
- Borrow only what you need
- Understand loan terms and interest rates
- Choose a degree with good earning potential
- Have a plan to pay back loans quickly

## Getting Family Involved

### Talk to Your Parents
- Discuss college savings goals together
- Understand what they can contribute
- Make a family college savings plan

### Grandparents and Relatives
- Many grandparents want to help with education costs
- They can contribute directly to 529 plans
- Ask for education contributions instead of other gifts

## College Savings Mistakes to Avoid

1. **Waiting too long to start**: Time is your biggest advantage
2. **Not researching costs**: Understand what you're saving for
3. **Ignoring scholarships**: Free money is the best money
4. **Putting all money in low-yield accounts**: Consider growth options
5. **Not involving family**: College savings can be a team effort

## Alternative Paths to Consider

College isn't the only path to success:
- Trade schools and vocational training
- Community college certificates
- Entrepreneurship
- Military service with education benefits

## The Bottom Line

Saving for college as a teen puts you ahead of the game. Every dollar you save now reduces future debt and stress. Start small, be consistent, and remember that college is an investment in your future.

The goal isn't to save every penny for college – it's to reduce the financial burden so you can focus on learning and building your career.

Your future college graduate self will thank you for starting this journey now!
    `,
    author: "Dr. Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Education",
    tags: ["college", "education", "savings", "financial planning"],
    image: "/placeholder.svg?height=400&width=600",
  },
}

const relatedPosts = [
  {
    id: "building-credit-as-teen",
    title: "Building Credit as a Teen: What You Need to Know",
    excerpt: "Learn the basics of credit and how to start building a positive credit history early.",
    category: "Credit",
    readTime: "6 min read",
  },
  {
    id: "teen-investment-basics",
    title: "Teen Investment Basics: Growing Your Money",
    excerpt: "Introduction to investing concepts and options for teenagers.",
    category: "Investing",
    readTime: "9 min read",
  },
  {
    id: "money-mindset-for-teens",
    title: "Developing a Healthy Money Mindset",
    excerpt: "How your thoughts about money shape your financial future.",
    category: "Psychology",
    readTime: "7 min read",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const foundPost = blogPosts[params.slug]
    setPost(foundPost || null)
  }, [params.slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
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
                } else if (paragraph.trim() === "") {
                  return <br key={index} />
                } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-bold mb-2">
                      {paragraph.slice(2, -2)}
                    </p>
                  )
                } else {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-medium">Share this article:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </span>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
