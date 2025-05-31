"use client"

import type React from "react"

import { HelpCircle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface EducationalTooltipProps {
  concept: string
  children?: React.ReactNode
}

const educationalContent = {
  "emergency-fund": {
    title: "Emergency Fund",
    explanation:
      "Money set aside for unexpected expenses like medical bills or urgent repairs. Aim to save $500-1000 as a teen.",
    tip: "Start small - even $5 per week adds up to $260 per year!",
  },
  "compound-interest": {
    title: "Compound Interest",
    explanation:
      "When you earn interest on both your original money AND the interest you've already earned. It's like money growing money!",
    tip: "Starting early is key - $100 saved at 16 grows more than $200 saved at 25!",
  },
  "needs-vs-wants": {
    title: "Needs vs Wants",
    explanation:
      "Needs are essentials for survival (food, shelter, basic clothing). Wants are things that make life more enjoyable but aren't necessary.",
    tip: "Before buying, ask: 'Do I need this to live, or do I just want it?'",
  },
  budgeting: {
    title: "Budgeting",
    explanation:
      "A plan for how you'll spend and save your money. It helps you control your money instead of wondering where it went.",
    tip: "Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings",
  },
  "opportunity-cost": {
    title: "Opportunity Cost",
    explanation:
      "What you give up when you choose one thing over another. If you buy a game, you can't use that money for something else.",
    tip: "Always consider: 'What else could I do with this money?'",
  },
  inflation: {
    title: "Inflation",
    explanation:
      "When prices go up over time, making your money worth less. A candy bar that costs $1 today might cost $1.10 next year.",
    tip: "This is why saving money in accounts that earn interest is important!",
  },
  "credit-score": {
    title: "Credit Score",
    explanation:
      "A number (300-850) that shows how good you are at paying back money you borrow. Higher scores = better loan terms.",
    tip: "Start building credit early with a secured credit card or being added to a parent's account",
  },
  diversification: {
    title: "Diversification",
    explanation:
      "Not putting all your eggs in one basket. Spreading money across different types of investments to reduce risk.",
    tip: "Even with savings goals, diversify - some for short-term wants, some for long-term dreams!",
  },
}

export function EducationalTooltip({ concept, children }: EducationalTooltipProps) {
  const content = educationalContent[concept as keyof typeof educationalContent]

  if (!content) return children || null

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children || (
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-muted-foreground hover:text-primary">
            <HelpCircle className="h-4 w-4" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80" side="top">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h4 className="font-medium">{content.title}</h4>
          </div>
          <p className="text-sm text-muted-foreground">{content.explanation}</p>
          <div className="bg-primary/10 p-3 rounded-lg">
            <p className="text-sm font-medium text-primary">💡 Quick Tip:</p>
            <p className="text-sm mt-1">{content.tip}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
