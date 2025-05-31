"use client"

import { BackButton } from "@/components/ui/back-button"
import { FinancialNewsFeed } from "@/components/news/financial-news-feed"

export default function NewsPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Financial News & Updates</h1>
        <p className="text-muted-foreground">
          Stay informed with personalized financial insights, tips, and market updates
        </p>
      </div>

      <FinancialNewsFeed />
    </div>
  )
}
