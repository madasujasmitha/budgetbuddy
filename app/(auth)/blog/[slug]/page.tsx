import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"

// Sample blog posts data
const blogPosts = {
  "building-credit-early": {
    title: "5 Ways Teens Can Start Building Credit Early",
    date: "May 15, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=400&width=800",
    excerpt:
      "Building good credit habits early can set you up for financial success. Here are five ways teens can start building credit responsibly.",
    content: `
      <h2>Why Building Credit Early Matters</h2>
      <p>Starting to build credit as a teenager gives you a significant advantage in your financial future. Good credit opens doors to better interest rates on loans, easier apartment rentals, and even better job opportunities in some fields.</p>
      
      <h2>1. Become an Authorized User</h2>
      <p>Ask a parent or guardian with good credit to add you as an authorized user on their credit card. This allows you to benefit from their positive payment history and helps establish your credit profile.</p>
      
      <h2>2. Open a Student Credit Card</h2>
      <p>Many banks offer credit cards specifically designed for students with no credit history. These cards typically have lower credit limits and may require a co-signer, but they're an excellent way to start building credit independently.</p>
      
      <h2>3. Consider a Secured Credit Card</h2>
      <p>If you can't qualify for a traditional credit card, a secured card requires a cash deposit that serves as your credit limit. It's a safe way to build credit with minimal risk.</p>
      
      <h2>4. Pay Bills on Time</h2>
      <p>Payment history is the most important factor in your credit score. Set up automatic payments or reminders to ensure you never miss a due date.</p>
      
      <h2>5. Keep Credit Utilization Low</h2>
      <p>Try to use less than 30% of your available credit limit. For example, if your limit is $500, try to keep your balance below $150.</p>
      
      <h2>Monitor Your Progress</h2>
      <p>Use free credit monitoring services to track your credit score and report. Many banks and credit card companies offer this service to their customers.</p>
    `,
  },
  "first-job-teen": {
    title: "How to Find Your First Job as a Teen",
    date: "May 10, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=400&width=800",
    excerpt:
      "Looking for your first job can be intimidating. Here's a step-by-step guide to finding and landing your first job as a teenager.",
    content: `
      <h2>Getting Started</h2>
      <p>Finding your first job is an exciting milestone that teaches valuable life skills and provides financial independence. Here's how to approach your job search strategically.</p>
      
      <h2>1. Identify Your Skills and Interests</h2>
      <p>Make a list of your strengths, hobbies, and interests. Are you good with kids? Consider babysitting or tutoring. Love animals? Look into pet-sitting or dog walking services.</p>
      
      <h2>2. Know the Legal Requirements</h2>
      <p>Understand the labor laws in your state. Most states allow 14-15 year olds to work limited hours in certain jobs, while 16-17 year olds have more opportunities.</p>
      
      <h2>3. Create a Simple Resume</h2>
      <p>Even without work experience, you can highlight your education, volunteer work, extracurricular activities, and relevant skills.</p>
      
      <h2>4. Start Your Search</h2>
      <p>Look for teen-friendly employers like:</p>
      <ul>
        <li>Restaurants and fast food chains</li>
        <li>Retail stores</li>
        <li>Movie theaters</li>
        <li>Grocery stores</li>
        <li>Recreation centers</li>
      </ul>
      
      <h2>5. Prepare for Interviews</h2>
      <p>Practice common interview questions, dress appropriately, and arrive early. Show enthusiasm and willingness to learn.</p>
      
      <h2>6. Follow Up</h2>
      <p>After applying or interviewing, follow up with a thank-you note or call to show your continued interest.</p>
    `,
  },
  "compound-interest-power": {
    title: "The Power of Compound Interest",
    date: "May 5, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=400&width=800",
    excerpt: "Understanding compound interest is like discovering a superpower for your money.",
    content: `
      <h2>What is Compound Interest?</h2>
      <p>Compound interest is when you earn interest not just on your original investment, but also on the interest you've already earned. It's like a snowball effect for your money.</p>
      
      <h2>The Magic Formula</h2>
      <p>The compound interest formula is: A = P(1 + r/n)^(nt)</p>
      <p>Where:</p>
      <ul>
        <li>A = final amount</li>
        <li>P = principal (initial amount)</li>
        <li>r = annual interest rate</li>
        <li>n = number of times interest compounds per year</li>
        <li>t = time in years</li>
      </ul>
      
      <h2>Real-World Example</h2>
      <p>If you invest $1,000 at 7% annual interest compounded annually:</p>
      <ul>
        <li>After 10 years: $1,967</li>
        <li>After 20 years: $3,870</li>
        <li>After 30 years: $7,612</li>
      </ul>
      
      <h2>Start Early, Win Big</h2>
      <p>The earlier you start investing, the more time compound interest has to work its magic. Even small amounts invested early can grow into substantial sums over time.</p>
      
      <h2>Where to Find Compound Interest</h2>
      <ul>
        <li>High-yield savings accounts</li>
        <li>Certificates of deposit (CDs)</li>
        <li>Stock market investments</li>
        <li>Retirement accounts (401k, IRA)</li>
      </ul>
    `,
  },
  "saving-vs-investing": {
    title: "Saving vs. Investing: What's the Difference?",
    date: "April 28, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=400&width=800",
    excerpt: "Learn when to save and when to invest your money for maximum growth.",
    content: `
      <h2>Understanding the Basics</h2>
      <p>Saving and investing are both important for financial health, but they serve different purposes and have different risk levels.</p>
      
      <h2>Saving: Safety First</h2>
      <p>Saving means putting money aside in safe, easily accessible accounts like:</p>
      <ul>
        <li>Savings accounts</li>
        <li>Money market accounts</li>
        <li>Certificates of deposit (CDs)</li>
      </ul>
      
      <h3>When to Save:</h3>
      <ul>
        <li>Emergency fund (3-6 months of expenses)</li>
        <li>Short-term goals (vacation, car, etc.)</li>
        <li>Money you'll need within 2-3 years</li>
      </ul>
      
      <h2>Investing: Growth Potential</h2>
      <p>Investing involves putting money into assets that have the potential to grow over time:</p>
      <ul>
        <li>Stocks</li>
        <li>Bonds</li>
        <li>Mutual funds</li>
        <li>ETFs</li>
        <li>Real estate</li>
      </ul>
      
      <h3>When to Invest:</h3>
      <ul>
        <li>Long-term goals (retirement, college)</li>
        <li>Money you won't need for 5+ years</li>
        <li>After you have an emergency fund</li>
      </ul>
      
      <h2>Risk vs. Reward</h2>
      <p>Savings are safe but offer low returns. Investments can provide higher returns but come with the risk of losing money.</p>
      
      <h2>The 50/30/20 Rule</h2>
      <p>A good starting point:</p>
      <ul>
        <li>50% for needs</li>
        <li>30% for wants</li>
        <li>20% for savings and investments</li>
      </ul>
    `,
  },
  "talk-parents-money": {
    title: "How to Talk to Your Parents About Money",
    date: "April 20, 2024",
    author: "Jasmitha Madasu",
    image: "/placeholder.svg?height=400&width=800",
    excerpt: "Tips for having productive conversations with your parents about finances.",
    content: `
      <h2>Breaking the Ice</h2>
      <p>Money conversations can feel awkward, but they're essential for your financial education. Here's how to approach these important discussions.</p>
      
      <h2>1. Choose the Right Time</h2>
      <p>Pick a relaxed moment when your parents aren't stressed or busy. Maybe during a car ride or after dinner when everyone is comfortable.</p>
      
      <h2>2. Start with Questions</h2>
      <p>Show genuine interest in learning:</p>
      <ul>
        <li>"How did you learn about money management?"</li>
        <li>"What financial mistakes did you make when you were young?"</li>
        <li>"How do you decide what to spend money on?"</li>
      </ul>
      
      <h2>3. Share Your Goals</h2>
      <p>Tell them about your financial goals and ask for advice. This shows maturity and opens the door for deeper conversations.</p>
      
      <h2>4. Ask About Family Finances</h2>
      <p>While respecting privacy, you can ask general questions about:</p>
      <ul>
        <li>How the family budget works</li>
        <li>Why certain financial decisions are made</li>
        <li>How to prepare for college expenses</li>
      </ul>
      
      <h2>5. Request Financial Education</h2>
      <p>Ask if they can teach you about:</p>
      <ul>
        <li>Banking and checking accounts</li>
        <li>Credit cards and credit scores</li>
        <li>Investing basics</li>
        <li>Tax preparation</li>
      </ul>
      
      <h2>6. Suggest Family Financial Activities</h2>
      <ul>
        <li>Review the family budget together</li>
        <li>Compare prices while shopping</li>
        <li>Discuss major purchases</li>
        <li>Plan for family financial goals</li>
      </ul>
      
      <h2>Making it Ongoing</h2>
      <p>Financial education isn't a one-time conversation. Make it a regular part of your family discussions to build your money knowledge over time.</p>
    `,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Card key={slug} className="overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                    <h4 className="font-bold mb-2">{relatedPost.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
