"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SpendingAnalysis } from "@/components/education/spending-analysis"
import { BudgetLimitAlert } from "@/components/education/budget-limit-alert"

const transactions = [
  {
    id: 1,
    date: "2023-01-01",
    description: "Grocery shopping",
    amount: -50.0,
    category: "Food",
  },
  {
    id: 2,
    date: "2023-01-02",
    description: "Paycheck",
    amount: 1000.0,
    category: "Income",
  },
  {
    id: 3,
    date: "2023-01-03",
    description: "Dinner with friends",
    amount: -75.0,
    category: "Food",
  },
  {
    id: 4,
    date: "2023-01-04",
    description: "Rent payment",
    amount: -1500.0,
    category: "Housing",
  },
  {
    id: 5,
    date: "2023-01-05",
    description: "Coffee",
    amount: -3.5,
    category: "Food",
  },
]

export default function TransactionsPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/">
        <Button variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>

      <BudgetLimitAlert category="food" spent={85} limit={100} percentage={85} />

      <Tabs defaultValue="transactions" className="mt-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analysis">Spending Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Here is a list of your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell className="text-right">{transaction.amount.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis">
          <SpendingAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  )
}
