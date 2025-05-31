"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TransactionEntry } from "@/components/transactions/transaction-entry"
import { TransactionHistory } from "@/components/transactions/transaction-history"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, BarChart3, Smile } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState("history")

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Money Adventures</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="history" className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4" />
            Adventure Log
          </TabsTrigger>
          <TabsTrigger value="add" className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="mt-0">
          <TransactionHistory />
        </TabsContent>

        <TabsContent value="add" className="mt-0">
          <TransactionEntry />
        </TabsContent>
      </Tabs>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-lg">Total Income</h3>
              <p className="text-2xl font-bold text-green-500 mt-2">$30.00</p>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-lg">Total Expenses</h3>
              <p className="text-2xl font-bold text-accent mt-2">$34.74</p>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-lg">Balance</h3>
              <p className="text-2xl font-bold text-primary mt-2">-$4.74</p>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Smile className="mr-2 h-5 w-5 text-primary" />
          Emotional Money Insights
        </h2>
        <Card className="border-2 border-primary/20">
          <CardContent className="p-4">
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2">Your Money Mood Patterns</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track how you feel about your spending to discover patterns and improve your financial well-being.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Recent Insight</h4>
                  <p className="text-sm">
                    You tend to feel <span className="font-bold text-amber-500">anxious</span> about food purchases.
                    Consider planning meals to feel more confident!
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Money Mood Tip</h4>
                  <p className="text-sm">
                    Tracking your emotions helps identify impulse purchases and build healthier spending habits.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
