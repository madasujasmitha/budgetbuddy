"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, User, Share2, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"

// Sample blog posts data
const blogPosts = {
  "teen-budgeting-basics": {
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    excerpt: "Learn the fundamentals of budgeting as a teenager and start building healthy money habits early.",
    content: `
# Teen Budgeting Basics: Your First Step to Financial Freedom

Starting your financial journey as a teenager might seem overwhelming, but it's actually the perfect time to build healthy money habits that will serve you for life. Let's break down the basics of budgeting in a way that's practical and achievable for teens.

## Why Budget as a Teen?

Budgeting isn't just for adults with mortgages and car payments. As a teen, you have unique advantages:

- **Fewer fixed expenses** - Most of your money is discretionary
- **Time to learn** - You can make mistakes without major consequences
- **Compound benefits** - Good habits formed now will pay dividends later

## The 50/30/20 Rule (Teen Edition)

The classic budgeting rule can be adapted for teenagers:

- **50% for Needs** - School supplies, transportation, essential clothing
- **30% for Wants** - Entertainment, dining out, hobbies, non-essential shopping
- **20% for Savings** - Emergency fund, future goals, investments

## Getting Started: Your First Budget

### Step 1: Track Your Income
List all sources of money coming in:
- Allowance from parents
- Part-time job earnings
- Birthday/holiday money
- Odd jobs (babysitting, lawn mowing, etc.)

### Step 2: List Your Expenses
Common teen expenses include:
- Food and snacks
- Entertainment (movies, games, streaming)
- Transportation (gas, bus fare)
- Clothing and accessories
- School-related costs
- Personal care items

### Step 3: Set Savings Goals
Having specific goals makes saving more motivating:
- **Short-term** (1-3 months): New video game, concert tickets
- **Medium-term** (6-12 months): Laptop, vacation with friends
- **Long-term** (1+ years): Car, college fund

## Budgeting Tools for Teens

### Apps and Digital Tools
- **BudgetBuddy** (of course!) - Gamified budgeting for teens
- **Mint** - Free comprehensive budgeting app
- **YNAB** (You Need A Budget) - Zero-based budgeting
- **PiggyBot** - Visual savings tracker

### Old-School Methods
- **Envelope system** - Cash in labeled envelopes for each category
- **Spreadsheet** - Simple and customizable
- **Notebook** - Write down every expense

## Common Teen Budgeting Mistakes

### 1. Being Too Restrictive
Don't cut out all fun money - you'll just end up breaking your budget. Allow for entertainment and spontaneous purchases.

### 2. Forgetting Small Expenses
Those $3 coffee runs and $5 snacks add up quickly. Track everything for at least a month to see where your money really goes.

### 3. Not Planning for Irregular Expenses
School events, friend's birthdays, and seasonal activities happen throughout the year. Set aside money for these "surprise" expenses.

### 4. Comparing to Others
Your budget should reflect YOUR priorities and financial situation, not your friends'. Focus on your own goals.

## Making Budgeting Fun

### Gamify Your Savings
- Set up challenges with friends
- Reward yourself for hitting milestones
- Use apps that turn saving into a game

### Visual Progress Tracking
- Create charts or graphs
- Use a savings thermometer
- Take photos of your growing savings

### Celebrate Wins
When you reach a savings goal or stick to your budget for a month, celebrate! This positive reinforcement helps build lasting habits.

## Advanced Tips for Teen Budgeters

### The Power of Automation
Set up automatic transfers to savings accounts. Even $10 per week adds up to over $500 per year!

### Learn About Compound Interest
Understanding how money grows over time will motivate you to save more. Even small amounts invested early can become substantial sums later.

### Track Your Net Worth
As you accumulate savings and possibly some investments, tracking your total net worth can be incredibly motivating.

## Dealing with Peer Pressure

One of the biggest challenges for teen budgeters is social pressure to spend. Here are strategies to handle this:

### Be Honest with Friends
Real friends will understand if you can't afford something. Suggest free or low-cost alternatives.

### Plan Ahead for Social Events
If you know there's a concert or event coming up, start saving for it early rather than going into debt.

### Find Budget-Friendly Social Activities
- Movie nights at home
- Potluck dinners
- Free community events
- Outdoor activities like hiking or beach days

## Building for the Future

Your teen budgeting skills are laying the foundation for major financial decisions ahead:

### College Planning
Understanding budgeting will help you make informed decisions about college costs and student loans.

### First Job Negotiations
Knowing your expenses helps you understand what salary you need to maintain your lifestyle.

### Major Purchases
The discipline you build now will help you save for big purchases like cars and eventually homes.

## Conclusion

Budgeting as a teen isn't about restricting your fun - it's about making intentional choices with your money so you can afford the things that matter most to you. Start simple, be consistent, and don't be afraid to adjust your budget as your life changes.

Remember, the goal isn't perfection. It's progress. Every dollar you track and every goal you reach is building financial skills that will benefit you for the rest of your life.

*Ready to start your budgeting journey? Download BudgetBuddy and turn your financial goals into an exciting adventure!*
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "money management", "savings"],
    image: "/placeholder.svg?height=400&width=800",
  },
  "summer-job-guide": {
    title: "The Ultimate Summer Job Guide for Teens",
    excerpt: "Discover the best summer job opportunities for teenagers and learn how to land your first job.",
    content: `
# The Ultimate Summer Job Guide for Teens

Summer break is the perfect time to earn some money, gain work experience, and develop valuable life skills. Whether you're saving for college, a car, or just want some spending money, finding the right summer job can set you up for success.

## Why Get a Summer Job?

### Financial Benefits
- Earn money for personal expenses
- Start building savings
- Learn the value of hard work
- Reduce financial burden on parents

### Life Skills Development
- Time management
- Communication skills
- Responsibility and reliability
- Customer service experience
- Teamwork and collaboration

### Career Exploration
- Discover interests and strengths
- Build your resume
- Network with professionals
- Gain references for future opportunities

## Best Summer Jobs for Teens

### Traditional Teen Jobs

#### 1. Retail Associate
**What you'll do:** Help customers, organize merchandise, operate cash registers
**Skills gained:** Customer service, sales, money handling
**Average pay:** $10-15/hour
**Pros:** Flexible hours, employee discounts
**Cons:** Can be repetitive, dealing with difficult customers

#### 2. Food Service Worker
**What you'll do:** Take orders, prepare food, clean dining areas
**Skills gained:** Multitasking, working under pressure, food safety
**Average pay:** $9-14/hour + tips
**Pros:** Fast-paced environment, potential for tips
**Cons:** Can be stressful during busy periods

#### 3. Lifeguard
**What you'll do:** Monitor swimmers, enforce safety rules, perform rescues if needed
**Skills gained:** Leadership, emergency response, responsibility
**Average pay:** $12-18/hour
**Pros:** Outdoor work, important responsibility
**Cons:** Requires certification, high responsibility

### Modern Opportunities

#### 4. Social Media Assistant
**What you'll do:** Create content, manage posts, engage with followers
**Skills gained:** Digital marketing, content creation, analytics
**Average pay:** $12-20/hour
**Pros:** Builds relevant skills, creative work
**Cons:** May require portfolio, competitive field

#### 5. Tutoring
**What you'll do:** Help younger students with homework and test prep
**Skills gained:** Teaching, patience, subject expertise
**Average pay:** $15-25/hour
**Pros:** Flexible schedule, rewarding work
**Cons:** Requires strong academic skills

#### 6. Pet Care Services
**What you'll do:** Dog walking, pet sitting, basic grooming
**Skills gained:** Responsibility, animal care, time management
**Average pay:** $10-20/hour
**Pros:** Work with animals, flexible hours
**Cons:** Weather-dependent, requires reliability

### Entrepreneurial Options

#### 7. Lawn Care Service
**What you'll do:** Mow lawns, trim hedges, basic landscaping
**Skills gained:** Business management, physical fitness, customer relations
**Average pay:** $20-40 per lawn
**Pros:** Be your own boss, good exercise
**Cons:** Weather-dependent, requires equipment

#### 8. Photography Services
**What you'll do:** Event photography, portrait sessions, photo editing
**Skills gained:** Technical skills, creativity, business development
**Average pay:** $50-200 per session
**Pros:** Creative work, build portfolio
**Cons:** Requires equipment and skills

## How to Find Summer Jobs

### Online Job Boards
- **Indeed Teen Jobs** - Filter specifically for teen-friendly positions
- **Snagajob** - Part-time and hourly positions
- **Local Facebook Groups** - Community job postings
- **Company Websites** - Apply directly to businesses you're interested in

### Traditional Methods
- **Walk-ins** - Visit local businesses with your resume
- **Networking** - Ask family, friends, and teachers about opportunities
- **School Resources** - Check with guidance counselors
- **Community Centers** - Often have job boards

### Seasonal Opportunities
- **Summer camps** - Counselor positions
- **Amusement parks** - Various seasonal roles
- **Ice cream shops** - Busy during summer months
- **Pool maintenance** - Seasonal demand

## Preparing for Your Job Search

### Create a Strong Resume
Even without work experience, you can highlight:
- Academic achievements
- Volunteer work
- Extracurricular activities
- Relevant skills (computer skills, languages, etc.)
- Personal projects

### Practice Interview Skills
Common questions for teen applicants:
- "Why do you want this job?"
- "What are your strengths and weaknesses?"
- "How would you handle a difficult customer?"
- "What are your availability and schedule preferences?"

### Gather Required Documents
- Social Security card
- Birth certificate or passport
- Work permit (if required in your state)
- Bank account information for direct deposit

## Legal Considerations for Teen Workers

### Age Restrictions
- **14-15 years old:** Limited hours and job types
- **16-17 years old:** More opportunities but still some restrictions
- **18+ years old:** Full adult work privileges

### Hour Limitations
During school year:
- Maximum 3 hours on school days
- Maximum 18 hours per week
- No work before 7 AM or after 7 PM

During summer:
- Maximum 8 hours per day
- Maximum 40 hours per week
- Extended evening hours (until 9 PM)

### Prohibited Jobs for Minors
- Operating dangerous machinery
- Working with hazardous chemicals
- Jobs involving alcohol service
- Certain construction work

## Making the Most of Your Summer Job

### Set Clear Goals
- How much money do you want to earn?
- What skills do you want to develop?
- What experience do you want to gain?

### Be Professional
- Arrive on time (or early)
- Dress appropriately
- Follow instructions carefully
- Ask questions when unsure
- Take initiative when appropriate

### Build Relationships
- Get to know your coworkers
- Be respectful to supervisors
- Network with customers when appropriate
- Ask for feedback regularly

### Track Your Earnings
- Monitor your paychecks
- Understand deductions (taxes, etc.)
- Set aside money for savings goals
- Track expenses related to work

## Managing Work and Summer Fun

### Create a Schedule
- Block out work hours
- Plan time for friends and family
- Schedule rest and relaxation
- Don't forget about summer reading or prep for next school year

### Communicate with Employers
- Be upfront about vacation plans
- Request time off well in advance
- Offer to find coverage when needed
- Be flexible when possible

## Turning Summer Work into Future Opportunities

### Ask for References
Before your job ends, ask supervisors if they'd be willing to serve as references for future applications.

### Request a Letter of Recommendation
A written recommendation can be valuable for college applications and future job searches.

### Stay Connected
Keep in touch with employers and coworkers - they might know about future opportunities.

### Update Your Resume
Add your summer job experience, highlighting specific achievements and skills gained.

## Common Summer Job Challenges and Solutions

### Challenge: Balancing Work and Social Life
**Solution:** Communicate your schedule to friends and plan activities around work hours.

### Challenge: Dealing with Difficult Customers
**Solution:** Stay calm, listen actively, and ask for supervisor help when needed.

### Challenge: Managing Money Earned
**Solution:** Set up a savings plan before you start working and stick to it.

### Challenge: Transportation to Work
**Solution:** Arrange reliable transportation before accepting a job offer.

## Conclusion

A summer job is more than just a way to earn money - it's an investment in your future. The skills, experience, and work ethic you develop during your first job will benefit you throughout your career.

Start your job search early, be persistent, and don't get discouraged if you don't land the first job you apply for. Every application and interview is valuable practice for the future.

Remember, your first job doesn't have to be your dream job. Focus on learning, growing, and proving that you're a reliable, hardworking employee. These qualities will open doors to better opportunities in the future.

*Ready to start your job search? Use BudgetBuddy to track your earnings and manage your money like a pro!*
    `,
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Career",
    tags: ["summer jobs", "teens", "career", "work experience"],
    image: "/placeholder.svg?height=400&width=800",
  },
  "saving-for-college": {
    title: "Smart Strategies for Saving for College",
    excerpt: "Learn effective ways to save money for college expenses and reduce student debt.",
    content: `
# Smart Strategies for Saving for College

College costs continue to rise, making it more important than ever to start saving early. Whether you're a freshman in high school or a senior preparing for graduation, it's never too early or too late to start building your college fund.

## Understanding College Costs

### Tuition and Fees
- **Public in-state:** $10,000-15,000 per year
- **Public out-of-state:** $25,000-35,000 per year
- **Private colleges:** $35,000-55,000 per year

### Additional Expenses
- Room and board: $10,000-15,000 per year
- Books and supplies: $1,000-2,000 per year
- Transportation: $500-2,000 per year
- Personal expenses: $1,000-3,000 per year

### Total Annual Costs
- **Community college:** $3,000-8,000
- **Public four-year:** $20,000-30,000
- **Private four-year:** $45,000-70,000

## Starting Early: The Power of Compound Interest

### Age 14: $50/month = $2,400 by graduation
### Age 16: $75/month = $2,700 by graduation
### Age 18: $200/month = $2,400 in one year

The earlier you start, the less you need to save each month to reach your goals.

## College Savings Strategies

### 1. 529 Education Savings Plans
**Pros:**
- Tax-free growth and withdrawals for education
- High contribution limits
- Some states offer tax deductions

**Cons:**
- Penalties for non-education withdrawals
- Limited investment options
- May affect financial aid eligibility

### 2. Coverdell Education Savings Account (ESA)
**Pros:**
- Tax-free growth and withdrawals
- Can be used for K-12 expenses
- More investment flexibility

**Cons:**
- Low contribution limits ($2,000/year)
- Income restrictions for contributors
- Must be used by age 30

### 3. UGMA/UTMA Custodial Accounts
**Pros:**
- No contribution limits
- Flexible use of funds
- Tax advantages for first $2,200 of earnings

**Cons:**
- Becomes child's asset at age of majority
- May significantly impact financial aid
- No tax deduction for contributions

### 4. High-Yield Savings Accounts
**Pros:**
- FDIC insured
- Easy access to funds
- No penalties for withdrawals

**Cons:**
- Lower returns than investments
- May not keep pace with college cost inflation
- Taxable interest income

## Creative Ways to Save for College

### Automatic Savings
Set up automatic transfers to your college fund:
- $25 per week = $1,300 per year
- $50 per month = $600 per year
- Round-up programs that save spare change

### Birthday and Holiday Money
Instead of spending gift money immediately:
- Save 50% of all monetary gifts
- Ask relatives to contribute to college fund instead of toys
- Create a "college fund" wish list for family

### Summer Job Strategy
Dedicate a portion of summer earnings:
- Save 60% of summer job income
- Work extra hours specifically for college fund
- Take on additional responsibilities for higher pay

### Side Hustles and Gig Work
- Tutoring younger students
- Pet sitting and dog walking
- Selling crafts or artwork online
- Freelance services (writing, design, social media)

## Reducing College Costs

### Academic Strategies
- **Dual enrollment:** Earn college credits in high school
- **AP courses:** Test out of introductory college classes
- **CLEP exams:** Earn credit by examination
- **Summer courses:** Graduate early or reduce course load

### Financial Strategies
- **Community college:** Complete general education requirements
- **In-state tuition:** Attend public universities in your state
- **Merit scholarships:** Maintain high GPA and test scores
- **Work-study programs:** Earn money while attending school

### Lifestyle Choices
- **Live at home:** Save on room and board costs
- **Buy used textbooks:** Save hundreds per semester
- **Cook your own meals:** Avoid expensive meal plans
- **Use student discounts:** Take advantage of reduced rates

## Scholarship and Grant Strategies

### Merit-Based Scholarships
- Maintain high GPA (3.5+)
- Participate in extracurricular activities
- Develop leadership skills
- Excel in standardized tests

### Need-Based Aid
- Complete FAFSA early and accurately
- Apply to schools that meet full financial need
- Consider schools where you're above average academically

### Specialized Scholarships
- Local community organizations
- Professional associations
- Employer-sponsored programs
- Minority and first-generation college student programs

## Working During College

### On-Campus Jobs
- Work-study positions
- Research assistant roles
- Campus tour guide
- Residence hall advisor

### Off-Campus Opportunities
- Internships in your field
- Part-time retail or food service
- Freelance work
- Tutoring services

### Balancing Work and Studies
- Limit work to 10-15 hours per week
- Choose jobs related to your major when possible
- Use time management tools and techniques
- Prioritize academics over work income

## Alternative Education Paths

### Community College Transfer
- Complete first two years at community college
- Transfer to four-year university
- Save $20,000-40,000 on total education costs

### Trade Schools and Certificates
- Shorter programs (6 months to 2 years)
- Lower total costs
- High-demand career fields
- Good earning potential

### Online Degree Programs
- Often less expensive than traditional programs
- Flexible scheduling for working students
- No room and board costs
- Growing acceptance by employers

## Creating Your College Savings Plan

### Step 1: Set Your Goal
- Research costs at target schools
- Decide what percentage you want to save
- Set realistic timeline and milestones

### Step 2: Choose Your Savings Vehicle
- Consider tax advantages
- Evaluate investment options
- Think about accessibility needs

### Step 3: Automate Your Savings
- Set up automatic transfers
- Use apps that round up purchases
- Direct deposit portion of paychecks

### Step 4: Track Your Progress
- Review savings monthly
- Adjust contributions as income changes
- Celebrate milestones reached

## Common Mistakes to Avoid

### Starting Too Late
Even if you're a senior, every dollar saved reduces future debt.

### Putting All Money in Low-Yield Accounts
For long-term savings, consider investment options for better growth.

### Not Applying for Financial Aid
Many families assume they won't qualify but are surprised by aid offers.

### Borrowing More Than Necessary
Only borrow what you truly need for education expenses.

### Not Considering All Options
Explore all types of schools and programs before making decisions.

## The Psychology of College Saving

### Make It Visual
- Create charts showing progress toward goals
- Use apps that gamify saving
- Post pictures of target schools as motivation

### Involve Family
- Make college saving a family goal
- Ask relatives to contribute instead of giving other gifts
- Share progress and celebrate milestones together

### Stay Motivated
- Visit college campuses to maintain excitement
- Connect savings to specific goals (textbooks, laptop, etc.)
- Remember that every dollar saved is a dollar not borrowed

## Conclusion

Saving for college requires planning, discipline, and creativity, but the payoff is enormous. Every dollar you save now is a dollar you won't have to borrow later, potentially saving you thousands in interest over the life of student loans.

Start where you are, with what you have. Whether it's $5 a week or $50 a month, consistent saving habits will serve you well throughout your life. Remember, the goal isn't to save every penny for college - it's to reduce the financial burden and give yourself more options.

The investment you make in your education today will pay dividends for the rest of your life. Start saving now, and your future self will thank you.

*Track your college savings progress with BudgetBuddy and turn your education goals into an achievable quest!*
    `,
    author: "Dr. Emily Rodriguez",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Savings",
    tags: ["college", "savings", "education", "financial planning"],
    image: "/placeholder.svg?height=400&width=800",
  },
}

// Get related posts (excluding current post)
const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  return Object.entries(blogPosts)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, post]) => ({ slug, ...post }))
    .filter((post) => post.category === currentCategory)
    .slice(0, 3)
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 20)

  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(params.slug, post.category)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLike}
                  className={isLiked ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  {likes}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="whitespace-pre-wrap">{post.content}</div>
          </div>

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-muted-foreground">
                    Financial education expert and teen money mentor. Passionate about helping young people build
                    healthy financial habits early in life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{relatedPost.readTime}</span>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <Button variant="link" size="sm" className="p-0 h-auto">
                              Read More →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
