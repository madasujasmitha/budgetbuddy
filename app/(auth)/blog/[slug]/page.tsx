import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar, ArrowLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: "teen-budgeting-basics",
    title: "Teen Budgeting Basics: Your First Step to Financial Freedom",
    summary: "Master the art of budgeting as a teenager with simple, practical strategies that set you up for lifelong financial success.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "3 min read",
    category: "Budgeting",
    tags: ["budgeting", "teens", "financial literacy"],
    keyPoints: [
      "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings",
      "Track all income sources (jobs, allowance, gifts, side hustles)",
      "Choose your budgeting method: envelope, apps, or spreadsheets",
      "Start small with emergency fund - even $100 helps with unexpected costs",
      "Set specific short, medium, and long-term financial goals",
      "Review your budget weekly and adjust as your life changes"
    ],
    fullContent: `Starting your financial journey as a teenager might seem overwhelming, but it's actually the perfect time to build healthy money habits that will serve you for life.

## Why Budget as a Teen?

Budgeting isn't just about restricting your spending – it's about taking control of your money and making intentional decisions. When you budget as a teen, you learn valuable life skills early, develop discipline, reduce financial stress, and prepare for adult responsibilities.

## The 50/30/20 Rule for Teens

- **50% for Needs**: Essential expenses like school supplies, transportation, or contributions to family expenses
- **30% for Wants**: Entertainment, eating out with friends, hobbies, and fun purchases  
- **20% for Savings**: Building your emergency fund and saving for bigger goals

## Getting Started: Your First Budget

### Track Your Income
List all money sources: part-time job wages, allowance, chore money, gifts, and side hustles like babysitting or lawn care.

### List Your Expenses
Write down everything: fixed expenses (phone bill, transportation) and variable expenses (food, entertainment, clothes).

### Choose Your Method
- **Envelope Method**: Use cash for different spending categories
- **Digital Apps**: Use budgeting apps designed for teens
- **Spreadsheet**: Create a simple budget tracker
- **Notebook**: Keep a written record

## Building Your Emergency Fund

Start small – even $100 can help with phone repairs, emergency transportation, last-minute school supplies, or medical expenses.

## Setting Financial Goals

- **Short-term** (1-3 months): New video game, concert tickets
- **Medium-term** (3-12 months): New laptop, car savings  
- **Long-term** (1+ years): College fund, first apartment deposit

The habits you build now will compound over time. Starting early gives you a huge advantage over someone who begins these habits in their 20s or 30s.`
  },
  {
    id: "first-job-money-tips",
    title: "Got Your First Job? Handle Your Money Like a Pro",
    summary: "Turn your first paycheck into the foundation of your financial future with smart money management strategies designed for new workers.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    author: "Mike Chen", 
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Career",
    tags: ["first job", "income", "career"],
    keyPoints: [
      "Pay yourself first - save before spending, even if it's just $20",
      "Don't lifestyle-inflate too quickly - resist upgrading everything at once",
      "Open checking and high-yield savings accounts for better money management",
      "Set up automatic transfers to make saving effortless (10-20% of income)",
      "Understand your paycheck: gross vs net pay, taxes, and deductions",
      "Build a $500-1000 emergency fund to cover unexpected expenses"
    ],
    fullContent: `Landing your first job is exciting! But how you handle your new income will set the tone for your entire financial future.

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
- **High-Yield Savings**: Earn more interest on your savings

### Set Up Automatic Transfers
Make saving effortless by automatically transferring a portion of each paycheck to savings. Start with 10-20% if possible.

### The Teen Worker's Budget Framework:
- **40% for Current Expenses**: Transportation, food, entertainment
- **30% for Savings Goals**: Emergency fund, big purchases, college
- **20% for Long-term Savings**: Future goals, investments  
- **10% for Fun Money**: Guilt-free spending on whatever you want

## Building Your Professional Financial Habits

Start an emergency fund aiming for $500-1000 initially. This covers car repairs, medical expenses, job loss buffer, and unexpected opportunities.

Learn about investing basics: compound interest, different investment accounts, and risk vs reward concepts.

Consider building credit responsibly through becoming an authorized user on a parent's card or getting a secured credit card.

Your first job is more than just making money – it's your first step into financial adulthood. The habits you build now will serve you for decades to come.`
  },
  {
    id: "saving-for-college", 
    title: "Saving for College: A Teen's Complete Guide",
    summary: "College costs are high, but smart saving strategies can dramatically reduce your future debt burden and financial stress.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
    author: "Dr. Lisa Rodriguez",
    date: "2024-01-05", 
    readTime: "5 min read",
    category: "Education",
    tags: ["college", "education", "savings"],
    keyPoints: [
      "College costs: Public in-state ~$10-15K/year, Private ~$35-50K+/year",
      "Use the 1/3 rule: 1/3 savings, 1/3 financial aid, 1/3 current income",
      "Starting at 14 vs 17: Save $278/month vs $833/month for $20K goal",
      "Consider 529 plans for tax-advantaged education savings",
      "Maximize gift money - ask relatives to contribute to college fund",
      "Hunt scholarships early: academic, athletic, community service, essays"
    ],
    fullContent: `College costs can seem overwhelming, but here's good news: every dollar you save now is a dollar you won't have to borrow later.

## Understanding College Costs

### Tuition and Fees
- Public in-state: ~$10,000-15,000/year
- Public out-of-state: ~$25,000-35,000/year  
- Private colleges: ~$35,000-50,000+/year

### Additional Costs
- Room and Board: ~$10,000-15,000/year
- Books and supplies: ~$1,200/year
- Transportation: ~$1,000/year
- Personal expenses: ~$2,000/year

## The Power of Starting Early

Saving $20,000 for college:
- Starting at 14: Save ~$278/month for 4 years
- Starting at 16: Save ~$417/month for 4 years  
- Starting at 17: Save ~$833/month for 2 years

The earlier you start, the less you need to save each month!

## College Savings Strategies

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

## The 1/3 Rule

Plan to cover college costs through:
- 1/3 savings (yours and parents')
- 1/3 financial aid/scholarships
- 1/3 current income (part-time work during college)

## Creative Ways to Boost College Savings

Ask relatives to contribute to your college fund instead of traditional gifts. Start side hustles like tutoring, pet sitting, selling crafts online, or seasonal work.

Begin scholarship hunting early - many are available for high school students including academic, athletic, community service awards, essay contests, and unique talent scholarships.

## Reducing College Costs

Take AP classes for college credit, consider dual enrollment, start at community college then transfer, choose in-state public universities, and look for schools with good financial aid.

The goal isn't to save every penny for college – it's to reduce the financial burden so you can focus on learning and building your career.`
  }
];

export default function TeenFinanceBlog() {
  const [currentView, setCurrentView] = useState('summary'); // 'summary' or 'full'
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setCurrentView('full');
  };

  const handleBackToSummary = () => {
    setCurrentView('summary');
    setSelectedPost(null);
  };

  const handleViewAllArticles = () => {
    setShowAllArticles(true);
  };

  const handleBackToHome = () => {
    setShowAllArticles(false);
  };

  // Full Article View
  if (currentView === 'full' && selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button 
            onClick={handleBackToSummary}
            variant="ghost" 
            className="mb-6 hover:bg-white/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Summary
          </Button>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader className="pb-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <Badge variant="secondary" className="w-fit mb-3">
                {selectedPost.category}
              </Badge>
              <CardTitle className="text-3xl font-bold text-gray-800 leading-tight">
                {selectedPost.title}
              </CardTitle>
              <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {selectedPost.fullContent.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                        {paragraph.slice(3)}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                        {paragraph.slice(4)}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-4 mb-2">
                        {paragraph.slice(2)}
                      </li>
                    );
                  } else if (paragraph.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // All Articles View
  if (showAllArticles) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={handleBackToHome}
            variant="ghost" 
            className="mb-6 hover:bg-white/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Teen Finance Hub
            </h1>
            <p className="text-xl text-gray-600">
              Quick-read financial tips for teenagers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-800 leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mt-2">
                    {post.summary}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleReadMore(post)}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Home View with Featured Article
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Teen Finance Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master your money in minutes with quick-read financial tips
          </p>
          <Button 
            onClick={handleViewAllArticles}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg"
          >
            View All Articles
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Featured Article */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader className="pb-6">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <Badge variant="secondary" className="w-fit mb-3">
                {featuredPost.category} • Featured
              </Badge>
              <CardTitle className="text-3xl font-bold text-gray-800 leading-tight">
                {featuredPost.title}
              </CardTitle>
              <p className="text-lg text-gray-600 mt-3">
                {featuredPost.summary}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Takeaways - Learn in 2 Minutes:
                </h3>
                <ul className="space-y-3">
                  {featuredPost.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={() => handleReadMore(featuredPost)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  Read Full Article
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  onClick={handleViewAllArticles}
                  variant="outline" 
                  className="flex-1 border-blue-200 hover:bg-blue-50"
                >
                  View All Articles
                </Button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
